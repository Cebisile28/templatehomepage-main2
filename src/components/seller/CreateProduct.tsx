import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { supabase } from "../../lib/supabase";

import ProductDetailsStep from "./ProductDetailsStep.tsx";
import PricingStep from "./PricingStep.tsx";
import MediaStep from "./MediaStep.tsx";
import ReviewStep from "./ReviewStep.tsx";
import ProgressBar from "./ProgressBar.tsx";


export type ProductFormData = {
  title: string;
  short_description: string;
  description: string;
  price: string;
  category: string;
  tags: string[];
  status: "draft" | "active" | "archived";
  featured: boolean;
  image: File | null;
  files: File[];
};



const CreateProduct: React.FC = () => {


  const navigate = useNavigate();


  const [step, setStep] = useState(1);


  const [loading, setLoading] = useState(false);


  const [error, setError] = useState("");



  const [product, setProduct] =
    useState<ProductFormData>({

      title: "",

      short_description: "",

      description: "",

      price: "",

      category: "",

      tags: [],

      status: "active",

      featured: false,

      image: null,

      files: [],

    });





  const updateProduct = (
    data: Partial<ProductFormData>
  ) => {

    setProduct(previous => ({
      ...previous,
      ...data,
    }));

  };







  const nextStep = () => {

    setStep(previous =>
      Math.min(previous + 1, 4)
    );

  };





  const previousStep = () => {

    setStep(previous =>
      Math.max(previous - 1, 1)
    );

  };

  const generateSlug = (title: string) => {

    return (
      title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-") +
      "-" +
      Date.now()
    );

  };







  const uploadImage = async (
    productId:string,
    file:File
  ) => {


    const fileExt =
      file.name.split(".").pop();


    const filePath =
      `${productId}/thumbnail.${fileExt}`;



    const {
      error:uploadError
    } =
    await supabase.storage
      .from("product-images")
      .upload(
        filePath,
        file,
        {
          upsert:true,
        }
      );



    if(uploadError)
      throw uploadError;




    const {
      data
    } =
    supabase.storage
      .from("product-images")
      .getPublicUrl(
        filePath
      );



    return data.publicUrl;


  };








  const uploadFiles = async (
    productId:string,
    files:File[]
  ) => {


    for(const file of files){


      const filePath =
        `${productId}/${Date.now()}-${file.name}`;



      const {
        error:uploadError
      }
      =
      await supabase.storage
        .from("product-files")
        .upload(
          filePath,
          file
        );



      if(uploadError)
        throw uploadError;





      await supabase
        .from("product_files")
        .insert({

          product_id: productId,

          file_path:filePath,

          storage_path:filePath,

          file_name:file.name,

          file_type:file.type,

          file_size:file.size,

          is_primary:false,

        });



    }


  };









  const publishProduct = async () => {


    try {


      setLoading(true);

      setError("");



      const {
        data:{
          user
        }
      }
      =
      await supabase.auth.getUser();



      if(!user){

        throw new Error(
          "Seller not logged in."
        );

      }







      const slug = generateSlug(product.title);

      /*
        1. Create product
      */


      const {
        data:createdProduct,
        error:createError
      }
      =
      await supabase
        .from("products")
        .insert({

          seller_id: user.id,

          title: product.title,

          short_description:
            product.short_description,

          description:
            product.description,

          price:
            Number(product.price),

          category:
            product.category,

          tags:
            product.tags,

          slug:
            slug,

          status:
            "active",

          featured:
            false,

        })
        .select()
        .single();





      if(createError)
        throw createError;





      const productId =
        createdProduct.id;







      /*
        2. Upload thumbnail
      */


      if(product.image){


        const imageUrl =
          await uploadImage(
            productId,
            product.image
          );



        await supabase
          .from("products")
          .update({

            image_url:imageUrl

          })
          .eq(
            "id",
            productId
          );


      }








      /*
        3. Upload digital files
      */


      if(product.files.length > 0){


        await uploadFiles(
          productId,
          product.files
        );


      }






      navigate(
        "/seller/products"
      );


    }
    catch(err){


      if(err instanceof Error){

        setError(
          err.message
        );

      }
      else{

        setError(
          "Unable to create product."
        );

      }


    }
    finally{

      setLoading(false);

    }



  };









  const renderStep = () => {


    switch(step){


      case 1:

        return (

          <ProductDetailsStep
            product={product}
            updateProduct={updateProduct}
          />

        );



      case 2:

        return (

          <PricingStep
            product={product}
            updateProduct={updateProduct}
          />

        );



      case 3:

        return (

          <MediaStep
            product={product}
            updateProduct={updateProduct}
          />

        );



      case 4:

        return (

          <ReviewStep
            product={product}
          />

        );



      default:

        return null;

    }


  };









  return (

    <div className="max-w-5xl mx-auto space-y-8">


      <div>

        <h1 className="text-4xl font-bold">
          Create Product
        </h1>


        <p className="text-gray-500 mt-2">
          Publish your digital product on Boostify Marketplace.
        </p>


      </div>





      <ProgressBar step={step}/>






      {error && (

        <div className="
          bg-red-100
          text-red-700
          p-4
          rounded-xl
        ">

          {error}

        </div>

      )}






      <div className="
        bg-white
        dark:bg-gray-900
        rounded-2xl
        shadow-lg
        p-8
      ">

        {renderStep()}

      </div>








      <div className="flex justify-between">


        <button

          onClick={() =>
            step === 1
            ? navigate("/seller/products")
            : previousStep()
          }

          className="
            px-6
            py-3
            rounded-xl
            border
          "

        >

          {step === 1 ? "Cancel" : "Back"}

        </button>






        {step < 4 ? (

          <button

            onClick={nextStep}

            className="
              px-8
              py-3
              rounded-xl
              bg-amber-400
              font-bold
            "

          >

            Next

          </button>


        ) : (


          <button

            disabled={loading}

            onClick={publishProduct}

            className="
              px-8
              py-3
              rounded-xl
              bg-green-500
              text-white
              font-bold
            "

          >

            {loading
              ? "Publishing..."
              : "Publish Product"
            }

          </button>


        )}


      </div>



    </div>

  );


};


export default CreateProduct;