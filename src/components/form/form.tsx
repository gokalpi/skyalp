import React, { useState, ReactNode, PropsWithoutRef } from 'react';
import { FormProvider, useForm, UseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import classNames from 'classnames';

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements['form']>, 'onSubmit'> {
  /** All your form fields */
  children?: ReactNode;
  /** Text to display in the submit button */
  submitText?: string;
  schema?: S;
  onSubmit: (values: z.infer<S>) => Promise<void | OnSubmitResult>;
  initialValues?: UseFormProps<z.infer<S>>['defaultValues'];
}

interface OnSubmitResult {
  FORM_ERROR?: string;
  [prop: string]: any;
}

export const FORM_ERROR = 'FORM_ERROR';

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  const ctx = useForm<z.infer<S>>({
    mode: 'onBlur',
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues: initialValues,
  });
  const [formError, setFormError] = useState<string | null>(null);

  return (
    <FormProvider {...ctx}>
      <form
        onSubmit={ctx.handleSubmit(async (values) => {
          const result = (await onSubmit(values)) || {};
          for (const [key, value] of Object.entries(result)) {
            if (key === FORM_ERROR) {
              setFormError(value);
            } else {
              ctx.setError(key as any, {
                type: 'submit',
                message: value,
              });
            }
          }
        })}
        className='mt-4'
        {...props}
      >
        {children}

        {formError && (
          <div role='alert' className='text-red-400 text-sm mt-1'>
            {formError}
          </div>
        )}

        {submitText && (
          <button
            type='submit'
            disabled={ctx.formState.isSubmitting}
            className={classNames(
              'text-white after:font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center',
              'bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700',
              'focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
            )}
          >
            {submitText}
          </button>
        )}
      </form>
    </FormProvider>
  );
}

export default Form;
