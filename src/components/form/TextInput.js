import React from 'react';

export default function TextInput({
  onInput, name, type, value, label, rules = null, error = null,
}) {
  const update = (evt) => {
    onInput(evt);
  };
  const border = (error == null) ? 'border-formColor' : 'border-red-500';
  return (
    <div className="w-full">
      <div className="w-full space-y-1">
        <label className="block text-sm text-formColor">{label}</label>
        <input  valid={rules} value={value} name={name} onChange={update} type={type} className={`w-full border outline-none text-gray-600  py-1 px-3 rounded-sm text-sm ${border}`} />
        <label className="text-red-500 text-xs">{error}</label>
      </div>
    </div>
  );
}