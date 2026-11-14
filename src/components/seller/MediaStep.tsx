import React from "react";
import { ProductFormData } from "./CreateProduct";
import ImageUploader from "./ImageUploader";
import FileUploader from "./FileUploader";

type MediaStepProps = {
  product: ProductFormData;
  updateProduct: (data: Partial<ProductFormData>) => void;
};

const MediaStep: React.FC<MediaStepProps> = ({
  product,
  updateProduct,
}) => {
  return (
    <div className="space-y-8 text-slate-800 dark:text-slate-100">
      <div>
        <h2 className="text-2xl font-bold">Product Media</h2>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Upload your product image and digital files.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
        <ImageUploader
          value={product.image}
          onChange={(file) => updateProduct({ image: file })}
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
        <FileUploader
          value={product.files}
          onChange={(files) => updateProduct({ files })}
        />
      </div>

      <div className="rounded-xl border border-sky-200 bg-sky-50 p-5 text-sm text-sky-800 dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-200">
        <p className="mb-2 font-semibold">Upload Tips</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Use a clear thumbnail image.</li>
          <li>Upload the final version of your digital product.</li>
          <li>Buyers will download these files after purchase.</li>
        </ul>
      </div>
    </div>
  );
};

export default MediaStep;