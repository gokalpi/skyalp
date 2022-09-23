import classNames from 'classnames';
import { forwardRef, PropsWithoutRef, ComponentPropsWithoutRef } from 'react';
import { useFormContext } from 'react-hook-form';

export interface TextAreaInputProps extends PropsWithoutRef<JSX.IntrinsicElements['textarea']> {
  /** Field name */
  name: string;
  /** Field label */
  label: string;
  /** Label position */
  labelPosition?: 'top' | 'left';
  /** Label for screen readers only */
  srOnly?: boolean;
  /** Input class names */
  inputClasses?: string;
  /** Input error class names */
  inputErrorClasses?: string;
  /** Label class names */
  labelClasses?: string;
  /** Label error class names */
  labelErrorClasses?: string;
  /** Error class names */
  errorClasses?: string;
}

/* eslint-disable react/display-name */
export const TextAreaInput = forwardRef<HTMLInputElement, TextAreaInputProps>(
  (
    {
      name,
      label,
      labelPosition = 'top',
      srOnly = false,
      inputClasses,
      inputErrorClasses,
      labelClasses,
      labelErrorClasses,
      errorClasses,
      ...props
    },
    ref
  ) => {
    const {
      register,
      formState: { isSubmitting, errors },
    } = useFormContext();
    const error = Array.isArray(errors[name])
      ? // @ts-ignore
        errors[name].join(', ')
      : errors[name]?.message || errors[name];

    return (
      <div className={props.className || 'w-full'}>
        <div className={labelPosition === 'left' ? 'sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center' : ''}>
          {label && (
            <label
              htmlFor={name}
              className={
                srOnly
                  ? 'sr-only'
                  : error
                  ? labelErrorClasses ?? 'text-red-700 dark:text-red-500 block mb-2 text-sm font-medium'
                  : labelClasses ?? 'text-gray-900 dark:text-gray-300 block mb-2 text-sm font-medium'
              }
            >
              {label}
            </label>
          )}

          <div className={labelPosition === 'left' ? 'mt-1 sm:mt-0 relative sm:col-span-2' : 'relative'}>
            <textarea
              {...register(name)}
              {...props}
              className={
                error
                  ? inputErrorClasses ??
                    classNames(
                      'bg-red-50 dark:bg-red-100 border border-red-500 dark:border-red-400 text-red-900',
                      'placeholder-red-700 dark:placeholder-red-400 focus:ring-red-500 focus:border-red-500',
                      'shadow-sm dark:shadow-sm-light rounded-md block w-full py-2.5 px-4',
                      'dark:focus:ring-blue-500 dark:focus:border-blue-500',
                      'focus:outline-none focus:ring-2 focus:ring-offset-2'
                    )
                  : inputClasses ??
                    classNames(
                      'bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white',
                      'dark:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500',
                      'shadow-sm dark:shadow-sm-light rounded-md block w-full py-2.5 px-4',
                      'dark:focus:ring-blue-500 dark:focus:border-blue-500',
                      'focus:outline-none focus:ring-2 focus:ring-offset-2'
                    )
              }
              disabled={isSubmitting}
            />
          </div>
        </div>

        {error && (
          <div role='alert' className={errorClasses ?? 'mt-2 text-sm text-red-600 dark:text-red-500'}>
            {error}
          </div>
        )}
      </div>
    );
  }
);

export default TextAreaInput;
