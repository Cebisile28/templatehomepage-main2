import React, { useEffect, useState } from "react";

type ImageUploaderProps = {
  value: File | null;
  onChange: (file: File | null) => void;
};

const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

const ImageUploader: React.FC<ImageUploaderProps> = ({
  value,
  onChange,
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!value) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(value);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [value]);

  const handleSelect = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError("");

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please choose an image.");
      return;
    }

    if (file.size > MAX_SIZE) {
      setError("Maximum image size is 5 MB.");
      return;
    }

    onChange(file);
  };

  return (
    <div className="space-y-4">

      <div>

        <label className="block text-sm font-semibold mb-2">
          Product Thumbnail
        </label>

        <input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          onChange={handleSelect}
          className="block w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3"
        />

      </div>

      {error && (
        <div className="rounded-lg bg-red-100 text-red-700 px-4 py-3">
          {error}
        </div>
      )}

      {preview && (
        <div className="relative">

          <img
            src={preview}
            alt="Preview"
            className="w-full max-w-sm h-60 object-cover rounded-xl border"
          />

          <button
            type="button"
            onClick={() => onChange(null)}
            className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg"
          >
            Remove
          </button>

        </div>
      )}

    </div>
  );
};

export default ImageUploader;