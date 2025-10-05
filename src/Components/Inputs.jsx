import React, { useState } from 'react';
import {
  MaskCurrency,
  MaskPhone,
  MaskCEP,
  MaskCPF,
  MaskCNPJ
} from '../utils/masks';

const MaskedInput = ({ labelText, labelClassName, name, inputClassName, divClassName, mask, onValueChange, ...props }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    let inputValue = e.target.value;
    let maskedValue = inputValue;

    switch (mask) {
      case 'currency':
        maskedValue = MaskCurrency(inputValue);
        break;
      case 'phone':
        maskedValue = MaskPhone(inputValue);
        break;
      case 'cep':
        maskedValue = MaskCEP(inputValue);
        break;
      case 'cpf':
        maskedValue = MaskCPF(inputValue);
        break;
      case 'cnpj':
        maskedValue = MaskCNPJ(inputValue);
        break;
      default:
        break;
    }

    setValue(maskedValue);

    // valor "limpo" sem formatação
    const cleanValue = maskedValue.replace(/\D/g, '');

    // callback opcional para o pai (ex: react-hook-form)
    if (onValueChange) onValueChange(cleanValue, maskedValue);
  };

  return (
    <div className={`flex flex-col gap-2 ${divClassName}`}>
      <label htmlFor={name} className={`text-xl ${labelClassName}`}>{labelText}</label>
      <input
        id={name}
        name={name}
        className={`
          border-2 
          border-blue-500 
          p-2 
          rounded-xl 
          focus:outline-none 
          focus:border-blue-700
          ${inputClassName}
        `}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export const InputField = ({ labelText, labelClassName, name, inputClassName, divClassName, ...props }) => {
  return (
    <div className={`flex flex-col gap-2 ${divClassName}`}>
      <label htmlFor={name} className={`text-xl ${labelClassName}`}>{labelText}</label>
      <input
        id={name}
        className={`
          border-2 
          border-blue-500 
          p-2 
          rounded-xl
          ${inputClassName}
        `}
        name={name}
        {...props}
      />
    </div>
  )
}

export const TextareaField = ({ labelText, labelClassName, name, inputClassName, divClassName, ...props }) => {
  return (
    <div className={`flex flex-col gap-2 ${divClassName}`}>
      <label htmlFor={name} className={`text-xl ${labelClassName}`}>{labelText}</label>
      <textarea
        id={name}
        className={`
          border-2 
          border-blue-500 
          p-2 
          rounded-xl
          ${inputClassName}
        `}
        name={name}
        {...props}
      ></textarea>
    </div>
  )
}

export default MaskedInput;
