import React, { useState } from "react";

import ImageUploader from "./ImageUploader";
import FileUploader from "./FileUploader";

type ProductFormProps = {
  sellerId: string;

  onSubmit: (product: {
    title: string;
    shortDescription: string;
    description: string;
    category: string;
    tags: string[];
    price: number;
    status: "draft" | "active";
    image: File | null;
    files: File[];
  }) => Promise<void>;
};

const ProductForm: React.FC<ProductFormProps> = ({
  sellerId,
  onSubmit,
}) => {

  const [title, setTitle] = useState("");

  const [shortDescription, setShortDescription] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [tags, setTags] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [status, setStatus] =
    useState<"draft" | "active">(
      "draft"
    );



  // Uploads

  const [image, setImage] =
    useState<File | null>(null);

  const [files, setFiles] =
    useState<File[]>([]);



  // UI

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");



  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    setError("");
    setSuccess("");



    if (!sellerId) {

      setError(
        "You must be logged in."
      );

      return;

    }



    if (!title.trim()) {

      setError(
        "Product title is required."
      );

      return;

    }



    if (!description.trim()) {

      setError(
        "Description is required."
      );

      return;

    }



    if (!category) {

      setError(
        "Please select a category."
      );

      return;

    }



    if (!price || Number(price) <= 0) {

      setError(
        "Please enter a valid price."
      );

      return;

    }



    if (!image) {

      setError(
        "Please upload a product image."
      );

      return;

    }



    if (files.length === 0) {

      setError(
        "Please upload at least one digital file."
      );

      return;

    }



    try {

      setLoading(true);

      await onSubmit({

        title,

        shortDescription,

        description,

        category,

        tags: tags
          .split(",")
          .map(tag => tag.trim())
          .filter(Boolean),

        price: Number(price),

        status,

        image,

        files,

      });



      setSuccess(
        "Product created successfully!"
      );



      setTitle("");
      setShortDescription("");
      setDescription("");
      setCategory("");
      setTags("");
      setPrice("");
      setStatus("draft");

      setImage(null);
      setFiles([]);

    }

    catch (err) {

      if (err instanceof Error) {

        setError(
          err.message
        );

      }

      else {

        setError(
          "Something went wrong."
        );

      }

    }

    finally {

      setLoading(false);

    }

  };
    return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Add New Product
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Create and publish your digital product.
        </p>
      </div>

      {success && (
        <div className="rounded-lg bg-green-100 text-green-700 px-4 py-3">
          {success}
        </div>
      )}

      {error && (
        <div className="rounded-lg bg-red-100 text-red-700 px-4 py-3">
          {error}
        </div>
      )}

      {/* Product Title */}

      <div>
        <label className="block font-medium mb-2">
          Product Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="React Admin Dashboard"
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-transparent"
        />
      </div>

      {/* Short Description */}

      <div>
        <label className="block font-medium mb-2">
          Short Description
        </label>

        <textarea
          rows={2}
          value={shortDescription}
          onChange={(e) =>
            setShortDescription(e.target.value)
          }
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-transparent"
        />
      </div>

      {/* Description */}

      <div>
        <label className="block font-medium mb-2">
          Full Description
        </label>

        <textarea
          rows={6}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-transparent"
        />
      </div>

      {/* Category + Price */}

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="block font-medium mb-2">
            Category
          </label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-transparent"
          >
            <option value="">Select Category</option>
            <option>Ebooks</option>
            <option>Templates</option>
            <option>UI Kits</option>
            <option>Website Themes</option>
            <option>Mobile Apps</option>
            <option>Graphics</option>
            <option>Icons</option>
            <option>Fonts</option>
            <option>Courses</option>
            <option>Software</option>
            <option>Plugins</option>
            <option>Source Code</option>
            <option>Other</option>
          </select>

        </div>

        <div>

          <label className="block font-medium mb-2">
            Price (USD)
          </label>

          <input
            type="number"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-transparent"
          />

        </div>

      </div>

      {/* Tags */}

      <div>

        <label className="block font-medium mb-2">
          Tags
        </label>

        <input
          type="text"
          value={tags}
          onChange={(e) =>
            setTags(e.target.value)
          }
          placeholder="react, dashboard, admin"
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-transparent"
        />

      </div>

      {/* Status */}

      <div>

        <label className="block font-medium mb-3">
          Product Status
        </label>

        <div className="flex gap-4">

          <button
            type="button"
            onClick={() => setStatus("draft")}
            className={`px-5 py-2 rounded-lg ${
              status === "draft"
                ? "bg-gray-900 text-white dark:bg-amber-400 dark:text-black"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            Draft
          </button>

          <button
            type="button"
            onClick={() => setStatus("active")}
            className={`px-5 py-2 rounded-lg ${
              status === "active"
                ? "bg-green-600 text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            Publish
          </button>

        </div>

      </div>

      {/* Uploads */}

      <div className="space-y-6 border-t border-gray-200 dark:border-gray-700 pt-6">

        <ImageUploader
          value={image}
          onChange={setImage}
        />

        <FileUploader
          value={files}
          onChange={setFiles}
        />

      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 rounded-xl transition disabled:opacity-50"
      >
        {loading ? "Saving Product..." : "Save Product"}
      </button>

    </form>
  );

};

export default ProductForm;