import React from 'react';

interface Props {
  type?: string;
  label?: string;
  readOnly?: boolean;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, readOnly, type, value, onChange }: Props) => {
  return (
    <>
      {label ? (
        <label className="block mb-1 text-sm text-gray-600" htmlFor={label}>
          {label}
        </label>
      ) : (
        label
      )}

      <input
        className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
        type={type || 'text'}
        id={label}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
