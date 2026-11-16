import React, { useRef, useState } from 'react';
import { useFormContext, useController } from 'react-hook-form';

interface FileUploadProps {
  name: string;
  label: string;
  accept?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({ name, label, accept }) => {
  const { control } = useFormContext();
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({ name, control });

  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onChange(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files[0]);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    onChange(undefined);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <label className="font-label-md text-on-surface">{label.toUpperCase()}</label>
      <div
        className={`relative w-full px-6 py-10 border-2 border-dashed rounded-[18px] flex flex-col items-center justify-center gap-2 transition-colors ${
          dragActive ? 'border-primary bg-primary/10' : 'border-outline-variant bg-surface-container/50'
        } ${error ? 'border-error bg-error-container/20' : ''} hover:bg-surface-container`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleChange}
          onBlur={onBlur}
          className="hidden"
        />

        {value ? (
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="material-symbols-outlined text-primary text-3xl">task</span>
            <span className="text-on-surface font-semibold max-w-[250px] truncate">
              {(value as File).name}
            </span>
            <button
              onClick={handleRemove}
              className="text-error text-sm font-semibold mt-2 hover:underline z-10"
            >
              Remove File
            </button>
          </div>
        ) : (
          <>
            <span className="material-symbols-outlined text-primary text-3xl pointer-events-none">
              upload_file
            </span>
            <span className="text-on-surface-variant pointer-events-none text-center">
              Drag and drop your file here, or click to browse
            </span>
            <span className="text-xs text-outline italic pointer-events-none">
              Max size: 20MB. Accepted formats: .pdf, .zip
            </span>
          </>
        )}
      </div>
      {error && <p className="text-sm text-error mt-1">{error.message}</p>}
    </div>
  );
};
