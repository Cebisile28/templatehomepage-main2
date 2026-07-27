import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  supabase,
} from "../../lib/supabase";


import ProductTable, {
  SellerProduct,
} from "../seller/ProductTable";


import ProductFilters from "../seller/ProductFilters";



const SellerProducts: React.FC = () => {


  const navigate = useNavigate();


  const [products, setProducts] =
    useState<SellerProduct[]>([]);


  const [loading, setLoading] =
    useState(true);


  const [error, setError] =
    useState("");



  const [search, setSearch] =
    useState("");


  const [category, setCategory] =
    useState("");


  const [status, setStatus] =
    useState("");


  const [sort, setSort] =
    useState("newest");




  useEffect(() => {

    loadProducts();

  }, []);





  const loadProducts = async () => {


    try {


      setLoading(true);

      setError("");



      const {
        data:{
          user
        },
      } =
      await supabase.auth.getUser();



      if (!user) {

        throw new Error(
          "Seller not logged in."
        );

      }




      const {
        data,
        error,
      } =
      await supabase
        .from("products")
        .select(
          `
          id,
          title,
          category,
          price,
          status,
          image_url,
          created_at
          `
        )
        .eq(
          "seller_id",
          user.id
        )
        .order(
          "created_at",
          {
            ascending:false,
          }
        );




      if(error){

        throw error;

      }




      setProducts(
        data || []
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
          "Unable to load products."
        );

      }


    }
    finally{

      setLoading(false);

    }


  };





  const filteredProducts =
    useMemo(()=>{


      let result =
        [...products];



      if(search.trim()){

        result =
          result.filter(
            product =>
              product.title
              .toLowerCase()
              .includes(
                search
                .toLowerCase()
              )
          );

      }




      if(category){

        result =
          result.filter(
            product =>
              product.category === category
          );

      }





      if(status){

        result =
          result.filter(
            product =>
              product.status === status
          );

      }





      switch(sort){

        case "oldest":

          result.sort(
            (a,b)=>
              new Date(a.created_at)
              .getTime()
              -
              new Date(b.created_at)
              .getTime()
          );

          break;



        case "price-low":

          result.sort(
            (a,b)=>
              Number(a.price)
              -
              Number(b.price)
          );

          break;




        case "price-high":

          result.sort(
            (a,b)=>
              Number(b.price)
              -
              Number(a.price)
          );

          break;




        case "title":

          result.sort(
            (a,b)=>
              a.title.localeCompare(
                b.title
              )
          );

          break;



        default:

          break;

      }



      return result;



    },[
      products,
      search,
      category,
      status,
      sort
    ]);







  const deleteProduct =
    async(id:string)=>{


      const confirm =
        window.confirm(
          "Delete this product?"
        );


      if(!confirm)
        return;



      const {
        error
      } =
      await supabase
        .from("products")
        .delete()
        .eq(
          "id",
          id
        );



      if(error){

        alert(
          error.message
        );

        return;

      }



      setProducts(
        previous =>
          previous.filter(
            product =>
              product.id !== id
          )
      );


    };







  if(loading){


    return (

      <div className="
        bg-white
        dark:bg-gray-900
        rounded-2xl
        p-10
        shadow
        text-center
      ">

        Loading products...

      </div>

    );


  }






  return (

    <div className="
      space-y-8
    ">


      <div className="
        flex
        flex-col
        md:flex-row
        md:justify-between
        md:items-center
        gap-4
      ">


        <div>

          <h1 className="
            text-4xl
            font-bold
          ">

            My Products

          </h1>


          <p className="
            text-gray-500
            mt-2
          ">

            Manage your Boostify Marketplace products.

          </p>


        </div>



        <button
          onClick={() =>
            navigate(
              "/seller/products/create"
            )
          }
          className="
            bg-amber-400
            hover:bg-amber-500
            text-black
            font-bold
            px-6
            py-3
            rounded-xl
          "
        >

          + Create Product

        </button>


      </div>





      <ProductFilters

        search={search}

        setSearch={setSearch}

        category={category}

        setCategory={setCategory}

        status={status}

        setStatus={setStatus}

        sort={sort}

        setSort={setSort}

      />






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






      <ProductTable

        products={filteredProducts}

        onEdit={(product)=>
          console.log(
            "Edit:",
            product
          )
        }

        onDelete={deleteProduct}

      />



    </div>

  );

};



export default SellerProducts;