import React, { useState, useEffect } from 'react';
import {
  MaskCurrency,
  MaskPhone,
  MaskCEP,
  MaskCPF,
  MaskCNPJ
} from '../utils/masks';

const MaskedInput = ({
  labelText,
  labelClassName,
  name,
  inputClassName,
  divClassName,
  mask,
  value: propValue = '',
  onValueChange,
  ...props
}) => {
  const [value, setValue] = useState('');

  // Aplica a máscara ao valor vindo da API (propValue)
  useEffect(() => {
    if (propValue !== undefined && propValue !== null) {
      let maskedValue = propValue.toString();

      switch (mask) {
        case 'currency':
          maskedValue = MaskCurrency(maskedValue);
          break;
        case 'phone':
          maskedValue = MaskPhone(maskedValue);
          break;
        case 'cep':
          maskedValue = MaskCEP(maskedValue);
          break;
        case 'cpf':
          maskedValue = MaskCPF(maskedValue);
          break;
        case 'cnpj':
          maskedValue = MaskCNPJ(maskedValue);
          break;
        default:
          break;
      }

      setValue(maskedValue);
    }
  }, [propValue, mask]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
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

    // valor limpo sem formatação
    const cleanValue = maskedValue.replace(/\D/g, '');

    if (onValueChange) onValueChange(cleanValue, maskedValue);
  };

  return (
    <div className={`flex flex-col gap-2 ${divClassName}`}>
      {labelText && (
        <label htmlFor={name} className={`text-xl ${labelClassName}`}>
          {labelText}
        </label>
      )}
      <input
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className={`
          border-2 
          border-primaryblue 
          p-2 
          rounded-xl 
          focus:outline-none
          focus:ring-2
          focus:ring-primaryblue/50
          transition-all
          duration-200
          ease-in-out
          ${inputClassName}
        `}
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
          border-primaryblue 
s         focus:outline-none
          p-2 
          rounded-xl
          focus:ring-2
          focus:ring-primaryblue/50
          transition-all
          duration-200
          ease-in-out
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
          border-primaryblue 
          Services           p-2 
          rounded-xl
          focus:outline-none
          focus:ring-2
          focus:ring-primaryblue/50
          transition-all
          duration-200
          ease-in-out
          ${inputClassName}
        `}
        name={name}
        {...props}
      ></textarea>
    </div>
  )
}

export default MaskedInput;
