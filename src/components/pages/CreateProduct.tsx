import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct: React.FC = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState("active");
  const [featured, setFeatured] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [digitalFiles, setDigitalFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setDigitalFiles(Array.from(e.target.files));
  };

  const removeDigitalFile = (index: number) => {
    setDigitalFiles((previous) => previous.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!title.trim()) {
      setError("Product title is required.");
      setLoading(false);
      return;
    }

    if (!price.trim()) {
      setError("Product price is required.");
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate("/seller/products");
  };

  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Create Product
      </h1>

      {error && (
        <div className="mb-6 bg-red-100 text-red-700 p-4 rounded-xl">
          {error}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>

        {/* Title */}

        <div>

          <label className="font-semibold block mb-2">
            Product Title
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-xl p-3"
          />

        </div>

        {/* Short Description */}

        <div>

          <label className="font-semibold block mb-2">
            Short Description
          </label>

          <input
            value={shortDescription}
            onChange={(e) =>
              setShortDescription(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          />

        </div>

        {/* Description */}

        <div>

          <label className="font-semibold block mb-2">
            Description
          </label>

          <textarea
            rows={6}
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          />

        </div>

        {/* Price */}
        <div>

  <label className="font-semibold block mb-2">
    Category
  </label>

  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="w-full border rounded-xl p-3"
  >
    <option value="">Choose category</option>
    <option>Templates</option>
    <option>eBooks</option>
    <option>Courses</option>
    <option>Graphics</option>
    <option>Software</option>
    <option>Music</option>
    <option>Video</option>
    <option>Other</option>
  </select>

</div>
<div>

  <label className="font-semibold block mb-2">
    Status
  </label>

  <select
    value={status}
    onChange={(e) => setStatus(e.target.value)}
    className="w-full border rounded-xl p-3"
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

</div>
<div>

  <label className="font-semibold block mb-2">
    Tags
  </label>

  <input
    value={tags}
    onChange={(e) => setTags(e.target.value)}
    placeholder="marketing, instagram, ebook"
    className="w-full border rounded-xl p-3"
  />

  <p className="text-sm text-gray-500 mt-2">
    Separate tags with commas.
  </p>

</div>
<div className="flex items-center gap-3">

  <input
    type="checkbox"
    checked={featured}
    onChange={(e) =>
      setFeatured(e.target.checked)
    }
  />

  <span>
    Featured Product
  </span>

</div>
<div>

  <label className="font-semibold block mb-3">
    Product Image
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={handleImageChange}
  />

  {image && (
    <p className="text-sm text-gray-500 mt-2">Selected image: {image.name}</p>
  )}

  {imagePreview && (

    <img
      src={imagePreview}
      alt="Preview"
      className="
      mt-4
      h-64
      rounded-xl
      object-cover
      border
      "
    />

  )}

</div>
<div>

  <label className="font-semibold block mb-3">
    Digital Files
  </label>

  <input
    type="file"
    multiple
    onChange={handleFilesChange}
  />

</div>
{digitalFiles.length > 0 && (

<div className="space-y-3 mt-5">

  {digitalFiles.map((file, index) => (

    <div
      key={index}
      className="
      flex
      justify-between
      items-center
      border
      rounded-xl
      p-3
      "
    >

      <div>

        <p className="font-medium">
          {file.name}
        </p>

        <p className="text-sm text-gray-500">
          {(file.size / 1024 / 1024).toFixed(2)} MB
        </p>

      </div>

      <button
        type="button"
        onClick={() =>
          removeDigitalFile(index)
        }
        className="
        text-red-500
        hover:text-red-700
        "
      >
        Remove
      </button>

    </div>

  ))}

</div>

)}
<div className="flex gap-4 pt-8">

<button
  type="button"
  onClick={() =>
    navigate("/seller/products")
  }
  className="
  px-6
  py-3
  rounded-xl
  border
  "
>
  Cancel
</button>

<button
  type="submit"
  disabled={loading}
  className="
  px-8
  py-3
  rounded-xl
  bg-amber-400
  hover:bg-amber-500
  font-bold
  "
>
  {loading ? "Creating..." : "Create Product"}
</button>

</div>

        <div>

          <label className="font-semibold block mb-2">
            Price
          </label>

          <input
            type="number"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          />

        </div>

      </form>

    </div>
  );
};

export default CreateProduct;