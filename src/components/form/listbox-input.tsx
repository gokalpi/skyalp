import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import React, { ComponentPropsWithoutRef, Fragment, HTMLProps, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

export interface IOption {
  name: string;
  value: string | number | null;
  disabled?: boolean;
  icon?: React.ReactElement;
}

interface ListboxInputProps extends HTMLProps<HTMLDivElement> {
  /** Field name. */
  name: string;
  /** Field label. */
  label: string;
  /** Label position */
  labelPosition?: 'top' | 'left' | 'sronly';
  options: IOption[];
  onOptionChange?: (e: IOption) => void;
  labelProps?: ComponentPropsWithoutRef<'label'>;
}

const ListboxInput: React.FC<ListboxInputProps> = ({
  label,
  name,
  options,
  onOptionChange,
  labelProps,
  labelPosition = 'top',
  ...rest
}) => {
  const [selected, setSelected] = useState<IOption>(options[0]);

  const {
    setValue,
    formState: { isSubmitting, errors },
    trigger,
    getValues,
  } = useFormContext();

  const error = Array.isArray(errors[name])
    ? // @ts-ignore
      errors[name].join(', ')
    : errors[name]?.message || errors[name];

  useEffect(() => {
    const value = getValues(name);

    if (value !== null && value !== undefined) {
      setSelected(() => {
        return options.find((x) => x.value === value) || options[0];
      });
    }
  }, [name, getValues, options]);

  const handleChange = (e: IOption) => {
    setValue(name, e.value);
    trigger(name);
    setSelected(e);
    onOptionChange && onOptionChange(e);
  };

  return (
    <div {...rest}>
      <div className={classNames(labelPosition === 'left' ? 'sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center' : '')}>
        {label && (
          <label
            {...labelProps}
            htmlFor={name}
            className={classNames(
              labelPosition === 'sronly'
                ? 'sr-only'
                : error
                ? 'text-red-700 dark:text-red-500 block mb-2 text-sm font-medium'
                : 'text-gray-900 dark:text-gray-300 block mb-2 text-sm font-medium'
            )}
          >
            {label}
          </label>
        )}

        <div className={classNames(labelPosition === 'left' ? 'mt-1 sm:mt-0 sm:col-span-2' : '')}>
          <Listbox value={selected} onChange={handleChange} disabled={isSubmitting}>
            {({ open }) => (
              <div className='relative mt-1'>
                <Listbox.Button
                  className={classNames(
                    'relative z-10 w-full cursor-default shadow-sm dark:shadow-sm-light sm:text-sm rounded-lg py-2 pl-3 pr-10 text-left border',
                    'focus:outline-none focus:ring-2 focus:ring-offset-2',
                    error
                      ? 'bg-red-50 dark:bg-red-100 border-red-500 dark:border-red-400 text-red-900 placeholder-red-700 dark:placeholder-red-400 focus:ring-red-500 focus:border-red-500'
                      : 'bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white dark:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  )}
                >
                  <span className='flex items-center'>
                    <span className='block truncate'>{selected.name}</span>{' '}
                  </span>
                  <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                    <ChevronUpDownIcon
                      className={`w-5 h-5 ${error ? 'text-red-400' : 'text-gray-400'}`}
                      aria-hidden='true'
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-gray-50 dark:bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                    {options.map((option, optionIdx) => (
                      <Listbox.Option
                        key={optionIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-blue-300 text-white' : 'text-gray-900 dark:text-white'
                          }`
                        }
                        value={option}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className='flex items-center'>
                              <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                                {option.name}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-blue-600 dark:text-blue-400',
                                  'absolute inset-y-0 left-0 flex items-center pl-3'
                                )}
                              >
                                <CheckIcon className='h-5 w-5' aria-hidden='true' />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            )}
          </Listbox>
        </div>
      </div>

      {error && (
        <div role='alert' className='mt-2 text-sm text-red-600 dark:text-red-500'>
          {error}
        </div>
      )}
    </div>
  );
};

export default ListboxInput;
