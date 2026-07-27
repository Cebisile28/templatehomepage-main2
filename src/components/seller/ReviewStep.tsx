import React from "react";

import {
  ProductFormData,
} from "./CreateProduct";



type ReviewStepProps = {
  product: ProductFormData;
};



const ReviewStep: React.FC<ReviewStepProps> = ({
  product,
}) => {


  const formatSize = (bytes: number) => {

    if (bytes < 1024) {
      return `${bytes} B`;
    }


    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }


    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;

  };





  return (

    <div className="space-y-8">


      <div>

        <h2 className="text-2xl font-bold">
          Review Product
        </h2>


        <p className="text-gray-500 mt-1">
          Check everything before publishing your product.
        </p>

      </div>







      {/* IMAGE PREVIEW */}

      <div>

        <h3 className="font-semibold mb-3">
          Product Image
        </h3>


        {product.image ? (

          <img
            src={URL.createObjectURL(product.image)}
            alt={product.title}
            className="
              w-full
              max-w-sm
              h-60
              object-cover
              rounded-xl
              border
            "
          />

        ) : (

          <div
            className="
              w-full
              max-w-sm
              h-60
              rounded-xl
              bg-gray-200
              dark:bg-gray-700
              flex
              items-center
              justify-center
              text-gray-500
            "
          >

            No Image Selected

          </div>

        )}

      </div>








      {/* PRODUCT INFORMATION */}

      <div
        className="
          bg-gray-50
          dark:bg-gray-800
          rounded-xl
          p-6
          space-y-4
        "
      >

        <h3 className="text-xl font-bold">
          Product Information
        </h3>



        <div>

          <p className="text-sm text-gray-500">
            Title
          </p>

          <p className="font-semibold">
            {product.title || "-"}
          </p>

        </div>





        <div>

          <p className="text-sm text-gray-500">
            Category
          </p>

          <p className="font-semibold">
            {product.category || "-"}
          </p>

        </div>





        <div>

          <p className="text-sm text-gray-500">
            Short Description
          </p>

          <p>
            {product.short_description || "-"}
          </p>

        </div>





        <div>

          <p className="text-sm text-gray-500">
            Description
          </p>

          <p className="whitespace-pre-line">
            {product.description || "-"}
          </p>

        </div>





        <div>

          <p className="text-sm text-gray-500">
            Tags
          </p>


          <div className="flex flex-wrap gap-2 mt-2">

            {product.tags.length > 0 ? (

              product.tags.map((tag: string) => (

                <span
                  key={tag}
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-amber-100
                    text-amber-700
                    text-sm
                  "
                >

                  {tag}

                </span>

              ))

            ) : (

              <span>
                No tags
              </span>

            )}

          </div>


        </div>


      </div>








      {/* PRICE */}

      <div
        className="
          bg-gray-50
          dark:bg-gray-800
          rounded-xl
          p-6
        "
      >

        <h3 className="text-xl font-bold mb-4">
          Pricing
        </h3>


        <p>

          Price:

          <span className="font-bold ml-2 text-amber-500">

            ${product.price || "0.00"}

          </span>

        </p>


        <p className="mt-2">

          Status:

          <span className="font-semibold ml-2">
            {product.status}
          </span>

        </p>


        <p className="mt-2">

          Featured:

          <span className="font-semibold ml-2">

            {product.featured
              ? "Yes"
              : "No"}

          </span>

        </p>


      </div>









      {/* FILES */}

      <div
        className="
          bg-gray-50
          dark:bg-gray-800
          rounded-xl
          p-6
        "
      >

        <h3 className="text-xl font-bold mb-4">
          Digital Files
        </h3>



        {product.files.length === 0 ? (

          <p className="text-gray-500">
            No files uploaded.
          </p>


        ) : (


          <div className="space-y-3">


            {product.files.map((file: File) => (

              <div
                key={`${file.name}-${file.size}`}
                className="
                  flex
                  justify-between
                  items-center
                  bg-white
                  dark:bg-gray-900
                  rounded-lg
                  p-4
                "
              >

                <div>

                  <p className="font-medium">
                    {file.name}
                  </p>


                  <p className="text-sm text-gray-500">
                    {formatSize(file.size)}
                  </p>


                </div>


              </div>

            ))}


          </div>


        )}



      </div>





    </div>

  );

};


export default ReviewStep;