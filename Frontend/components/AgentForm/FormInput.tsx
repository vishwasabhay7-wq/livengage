import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ name, label, className, ...props }, ref) => {
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
        <input
          id={name}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`w-full bg-white border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-on-surface ${
            error ? 'border-error ring-error/20' : ''
          } ${className || ''}`}
          {...register(name)}
          {...props}
        />
        {error && (
          <p id={`${name}-error`} className="text-sm text-error mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
