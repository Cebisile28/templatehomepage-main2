import React, { useState } from "react";
import {
  DocumentIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

type FileUploaderProps = {
  value: File[];
  onChange: (files: File[]) => void;
};

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

const FileUploader: React.FC<FileUploaderProps> = ({
  value,
  onChange,
}) => {
  const [error, setError] = useState("");

  const handleSelect = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError("");

    const selectedFiles = Array.from(e.target.files || []);

    if (selectedFiles.length === 0) return;

    const validFiles: File[] = [];

    for (const file of selectedFiles) {
      if (file.size > MAX_FILE_SIZE) {
        setError(`"${file.name}" exceeds the 50MB limit.`);
        continue;
      }

      validFiles.push(file);
    }

    onChange([...value, ...validFiles]);

    // Allow selecting the same file again later
    e.target.value = "";
  };

  const removeFile = (index: number) => {
    const updated = [...value];
    updated.splice(index, 1);
    onChange(updated);
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024)
      return `${(bytes / 1024).toFixed(1)} KB`;

    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="space-y-4">

      <div>

        <label className="block text-sm font-semibold mb-2">
          Digital Product Files
        </label>

        <input
          type="file"
          multiple
          onChange={handleSelect}
          className="block w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3"
        />

        <p className="text-sm text-gray-500 mt-2">
          Upload ZIP, PDF, PSD, AI, MP4, MP3, source code or other digital files.
          Maximum size: 50MB per file.
        </p>

      </div>

      {error && (
        <div className="rounded-lg bg-red-100 text-red-700 px-4 py-3">
          {error}
        </div>
      )}

      {value.length > 0 && (

        <div className="space-y-3">

          {value.map((file, index) => (

            <div
              key={`${file.name}-${index}`}
              className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-lg p-4"
            >

              <div className="flex items-center gap-3">

                <DocumentIcon className="w-6 h-6 text-amber-500" />

                <div>

                  <p className="font-medium break-all">
                    {file.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {formatSize(file.size)}
                  </p>

                </div>

              </div>

              <button
                type="button"
                onClick={() => removeFile(index)}
                className="text-red-600 hover:text-red-700"
              >
                <TrashIcon className="w-5 h-5" />
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default FileUploader;