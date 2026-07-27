import React from "react";

import {
  ProductFormData,
} from "./CreateProduct";


import ImageUploader from "./ImageUploader";
import FileUploader from "./FileUploader";



type MediaStepProps = {

  product: ProductFormData;

  updateProduct: (
    data: Partial<ProductFormData>
  ) => void;

};





const MediaStep: React.FC<MediaStepProps> = ({
  product,
  updateProduct,
}) => {


  return (

    <div className="space-y-8">


      <div>

        <h2 className="text-2xl font-bold">
          Product Media
        </h2>


        <p className="text-gray-500 mt-1">
          Upload your product image and digital files.
        </p>


      </div>







      {/* PRODUCT IMAGE */}

      <div
        className="
          bg-gray-50
          dark:bg-gray-800
          rounded-xl
          p-5
        "
      >

        <ImageUploader

          value={
            product.image
          }

          onChange={(file: File | null) =>
            updateProduct({
              image: file,
            })
          }

        />


      </div>








      {/* DIGITAL FILES */}

      <div
        className="
          bg-gray-50
          dark:bg-gray-800
          rounded-xl
          p-5
        "
      >


        <FileUploader

          value={
            product.files
          }


          onChange={(files: File[]) =>
            updateProduct({
              files,
            })
          }


        />


      </div>








      {/* INFORMATION BOX */}

      <div
        className="
          rounded-xl
          bg-amber-50
          border
          border-amber-200
          p-5
          text-sm
          text-amber-800
        "
      >

        <p className="font-semibold mb-2">
          Upload Tips
        </p>


        <ul className="list-disc ml-5 space-y-1">

          <li>
            Use a clear thumbnail image.
          </li>

          <li>
            Upload the final version of your digital product.
          </li>

          <li>
            Buyers will download these files after purchase.
          </li>

        </ul>


      </div>





    </div>

  );

};


export default MediaStep;