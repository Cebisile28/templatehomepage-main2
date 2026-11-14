import React, { useEffect, useState } from "react";

type ImageUploaderProps = {
  value: File | null;
  onChange: (file: File | null) => void;
};

const MAX_SIZE = 5 * 1024 * 1024;

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

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please choose an image.");
      e.target.value = "";
      return;
    }

    if (file.size > MAX_SIZE) {
      setError("Maximum image size is 5 MB.");
      e.target.value = "";
      return;
    }

    onChange(file);
    e.target.value = "";
  };

  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-100">
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Product Thumbnail
        </label>
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          onChange={handleSelect}
          className="block w-full rounded-lg border border-slate-300 bg-white p-3 text-sm dark:border-slate-700 dark:bg-slate-900"
        />
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          PNG, JPG or WebP. Maximum size: 5 MB.
        </p>
      </div>

      {error && (
        <div className="rounded-lg bg-red-100 px-4 py-3 text-red-700 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </div>
      )}

      {preview && (
        <div className="relative">
          <img
            src={preview}
            alt="Product preview"
            className="h-60 w-full max-w-sm rounded-xl border border-slate-200 object-cover dark:border-slate-700"
          />
          <button
            type="button"
            onClick={() => {
              onChange(null);
              setError("");
            }}
            className="absolute right-3 top-3 rounded-lg bg-red-600 px-3 py-1 text-white transition hover:bg-red-700"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;