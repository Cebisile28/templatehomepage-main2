import React from "react";

import {
  ProductFormData,
} from "./CreateProduct";


type PricingStepProps = {
  product: ProductFormData;

  updateProduct: (
    data: Partial<ProductFormData>
  ) => void;
};



const PricingStep: React.FC<PricingStepProps> = ({
  product,
  updateProduct,
}) => {


  return (

    <div className="space-y-8">


      <div>

        <h2 className="text-2xl font-bold">
          Pricing & Visibility
        </h2>

        <p className="text-gray-500 mt-1">
          Set your product price and decide how buyers will see it.
        </p>

      </div>






      {/* PRICE */}

      <div>

        <label className="block font-semibold mb-2">
          Product Price *
        </label>


        <div className="relative">

          <span
            className="
              absolute
              left-4
              top-3
              text-gray-500
            "
          >
            $
          </span>


          <input
            type="number"
            min="0"
            step="0.01"
            value={product.price}
            onChange={(e)=>
              updateProduct({
                price: e.target.value,
              })
            }
            placeholder="29.99"
            className="
              w-full
              rounded-xl
              border
              p-3
              pl-8
              dark:bg-gray-800
            "
          />


        </div>


        <p className="text-sm text-gray-500 mt-2">
          Set the amount buyers will pay for your product.
        </p>


      </div>








      {/* STATUS */}

      <div>

        <label className="block font-semibold mb-2">
          Product Status
        </label>


        <select
          value={product.status}
          onChange={(e)=>
            updateProduct({
              status:
                e.target.value as
                "draft" |
                "active" |
                "archived",
            })
          }
          className="
            w-full
            rounded-xl
            border
            p-3
            dark:bg-gray-800
          "
        >

          <option value="draft">
            Draft
          </option>


          <option value="active">
            Active
          </option>


          <option value="archived">
            Archived
          </option>


        </select>


        <p className="text-sm text-gray-500 mt-2">

          Active products are visible to buyers.

        </p>


      </div>









      {/* FEATURED */}

      <div
        className="
          flex
          items-center
          justify-between
          rounded-xl
          border
          p-5
        "
      >


        <div>

          <h3 className="font-semibold">
            Featured Product
          </h3>


          <p className="text-sm text-gray-500">
            Highlight this product in the marketplace.
          </p>


        </div>





        <label
          className="
            relative
            inline-flex
            items-center
            cursor-pointer
          "
        >

          <input
            type="checkbox"
            className="sr-only peer"

            checked={product.featured}

            onChange={(e)=>
              updateProduct({
                featured:
                  e.target.checked,
              })
            }

          />


          <div
            className="
              w-11
              h-6
              bg-gray-300
              rounded-full
              peer
              peer-checked:bg-amber-400
              after:content-['']
              after:absolute
              after:top-[2px]
              after:left-[2px]
              after:bg-white
              after:border
              after:rounded-full
              after:h-5
              after:w-5
              after:transition-all
              peer-checked:after:translate-x-full
            "
          />


        </label>


      </div>







    </div>

  );

};


export default PricingStep;