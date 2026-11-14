import React, { useState } from "react";
import { DocumentIcon, TrashIcon } from "@heroicons/react/24/outline";

type FileUploaderProps = {
  value: File[];
  onChange: (files: File[]) => void;
};

const MAX_FILE_SIZE = 50 * 1024 * 1024;

const FileUploader: React.FC<FileUploaderProps> = ({
  value,
  onChange,
}) => {
  const [error, setError] = useState("");

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    const selectedFiles = Array.from(e.target.files || []);

    if (!selectedFiles.length) return;

    const validFiles: File[] = [];
    const oversizedFiles: string[] = [];

    for (const file of selectedFiles) {
      if (file.size > MAX_FILE_SIZE) {
        oversizedFiles.push(file.name);
      } else {
        validFiles.push(file);
      }
    }

    if (oversizedFiles.length) {
      setError(
        `${oversizedFiles.join(", ")} ${
          oversizedFiles.length === 1 ? "exceeds" : "exceed"
        } the 50 MB limit.`
      );
    }

    onChange([...value, ...validFiles]);
    e.target.value = "";
  };

  const removeFile = (index: number) => {
    onChange(value.filter((_, fileIndex) => fileIndex !== index));
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-100">
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Digital Product Files
        </label>
        <input
          type="file"
          multiple
          onChange={handleSelect}
          className="block w-full rounded-lg border border-slate-300 bg-white p-3 text-sm dark:border-slate-700 dark:bg-slate-900"
        />
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Upload ZIP, PDF, PSD, AI, MP4, MP3, source code or other digital
          files. Maximum size: 50 MB per file.
        </p>
      </div>

      {error && (
        <div className="rounded-lg bg-red-100 px-4 py-3 text-red-700 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </div>
      )}

      {value.length > 0 && (
        <div className="space-y-3">
          {value.map((file, index) => (
            <div
              key={`${file.name}-${file.size}-${index}`}
              className="flex items-center justify-between gap-3 rounded-lg bg-white p-4 dark:bg-slate-900"
            >
              <div className="flex min-w-0 items-center gap-3">
                <DocumentIcon className="h-6 w-6 shrink-0 text-sky-500" />
                <div className="min-w-0">
                  <p className="break-all font-medium">{file.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {formatSize(file.size)}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => removeFile(index)}
                aria-label={`Remove ${file.name}`}
                className="shrink-0 text-red-500 transition hover:text-red-700"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploader;