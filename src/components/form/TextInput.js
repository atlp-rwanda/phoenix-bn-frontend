import React from 'react'

export default function TextInput({ onInput, name, type, value, label,valid,group=''}) {
    return (
        <div className='w-full'>
            <div className='w-full space-y-1'>
                <label className={'block text-sm text-formColor'}>{label}</label>
                <input valid={valid}   value={value} name={name} onChange={() => onInput(event)} type={type} className={'w-full border outline-none text-gray-600 border-formColor py-1 px-3 rounded-sm text-sm '+group} />
            </div>
        </div>
    )
}
