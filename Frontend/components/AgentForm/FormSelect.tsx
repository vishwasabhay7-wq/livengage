import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

export const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ name, label, options, className, ...props }, ref) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();

    const error = errors[name]?.message as string;

    return (
      <div className="space-y-2">
        <label htmlFor={name} className="font-label-md text-on-surface">
          {label.toUpperCase()}
        </label>
        <div className="relative">
          <select
            id={name}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
            className={`w-full bg-white border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none text-on-surface ${
              error ? 'border-error ring-error/20' : ''
            } ${className || ''}`}
            {...register(name)}
            {...props}
          >
            <option value="" disabled>
              Select an option
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-on-surface-variant">
            <span className="material-symbols-outlined" aria-hidden="true">
              expand_more
            </span>
          </div>
        </div>
        {error && (
          <p id={`${name}-error`} className="text-sm text-error mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormSelect.displayName = 'FormSelect';
