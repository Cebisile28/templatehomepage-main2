import React from "react";
import { ProductFormData } from "./CreateProduct";


type ProductDetailsStepProps = {
  product: ProductFormData;
  updateProduct: (
    data: Partial<ProductFormData>
  ) => void;
};


const categories = [
  "Ebooks",
  "Templates",
  "UI Kits",
  "Website Themes",
  "Mobile Apps",
  "Graphics",
  "Icons",
  "Fonts",
  "Courses",
  "Software",
  "Plugins",
  "Source Code",
  "Other",
];



const ProductDetailsStep: React.FC<ProductDetailsStepProps> = ({
  product,
  updateProduct,
}) => {


  return (

    <div className="space-y-6">


      <div>

        <h2 className="text-2xl font-bold">
          Product Details
        </h2>

        <p className="text-gray-500 mt-1">
          Tell buyers what your digital product is about.
        </p>

      </div>





      {/* TITLE */}

      <div>

        <label className="block font-semibold mb-2">
          Product Title *
        </label>

        <input
          type="text"
          value={product.title}
          onChange={(e) =>
            updateProduct({
              title: e.target.value,
            })
          }
          placeholder="Example: Modern Website Template"
          className="
            w-full
            rounded-xl
            border
            p-3
            dark:bg-gray-800
          "
        />

      </div>






      {/* SHORT DESCRIPTION */}

      <div>

        <label className="block font-semibold mb-2">
          Short Description *
        </label>

        <input
          type="text"
          value={product.short_description}
          onChange={(e) =>
            updateProduct({
              short_description:
                e.target.value,
            })
          }
          placeholder="A short summary buyers will see"
          className="
            w-full
            rounded-xl
            border
            p-3
            dark:bg-gray-800
          "
        />

      </div>






      {/* DESCRIPTION */}

      <div>

        <label className="block font-semibold mb-2">
          Full Description
        </label>


        <textarea
          rows={6}
          value={product.description}
          onChange={(e) =>
            updateProduct({
              description:
                e.target.value,
            })
          }
          placeholder="Explain your product..."
          className="
            w-full
            rounded-xl
            border
            p-3
            dark:bg-gray-800
          "
        />


      </div>






      {/* CATEGORY */}

      <div>

        <label className="block font-semibold mb-2">
          Category *
        </label>


        <select
          value={product.category}
          onChange={(e) =>
            updateProduct({
              category:
                e.target.value,
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

          <option value="">
            Select category
          </option>


          {categories.map((category)=>(

            <option
              key={category}
              value={category}
            >
              {category}
            </option>

          ))}


        </select>


      </div>







      {/* TAGS */}

      <div>

        <label className="block font-semibold mb-2">
          Tags
        </label>


        <input
          type="text"
          placeholder="design, website, template"
          value={product.tags.join(", ")}
          onChange={(e)=>{

            const tags =
              e.target.value
              .split(",")
              .map(tag =>
                tag.trim()
              )
              .filter(Boolean);


            updateProduct({
              tags,
            });

          }}
          className="
            w-full
            rounded-xl
            border
            p-3
            dark:bg-gray-800
          "
        />


        <p className="text-sm text-gray-500 mt-2">
          Separate tags using commas.
        </p>


      </div>




    </div>

  );

};


export default ProductDetailsStep;