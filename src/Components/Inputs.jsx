import React, { useState, useEffect, useCallback } from 'react';
import {
  MaskCurrency,
  MaskPhone,
  MaskCEP,
  MaskCPF,
  MaskCNPJ
} from '../utils/masks';

// Helper to apply masks (Extracts logic out of the component)
const applyMask = (value, maskType) => {
  if (!value) return '';
  const stringValue = value.toString();

  switch (maskType) {
    case 'currency': return MaskCurrency(stringValue);
    case 'phone':    return MaskPhone(stringValue);
    case 'cep':      return MaskCEP(stringValue);
    case 'cpf':      return MaskCPF(stringValue);
    case 'cnpj':     return MaskCNPJ(stringValue);
    default:         return stringValue;
  }
};

const MaskedInput = ({
  labelText,
  labelClassName = '',
  name,
  inputClassName = '',
  divClassName = '',
  mask,
  value: propValue = '',
  onValueChange,
  ...props
}) => {
  const [value, setValue] = useState('');

  // Sync propValue to internal state when it changes externally
  useEffect(() => {
    // Only update if propValue is different to avoid loops
    // Applying mask immediately to incoming props
    const masked = applyMask(propValue, mask);
    setValue(masked);
  }, [propValue, mask]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    
    // 1. Apply Mask
    const maskedValue = applyMask(inputValue, mask);
    
    // 2. Update Internal State
    setValue(maskedValue);

    // 3. Clean Value (Be careful with Currency here depending on backend needs)
    const cleanValue = maskedValue.replace(/\D/g, '');

    // 4. Send both back to parent
    if (onValueChange) {
      onValueChange(cleanValue, maskedValue);
    }
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
        {...props} 
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
      />
    </div>
  );
};

export const InputField = ({ labelText, labelClassName = '', name, inputClassName = '', divClassName = '', ...props }) => {
  return (
    <div className={`flex flex-col gap-2 ${divClassName}`}>
      {labelText && <label htmlFor={name} className={`text-xl ${labelClassName}`}>{labelText}</label>}
      <input
        id={name}
        name={name}
        {...props}
        className={`
          border-2 
          border-primaryblue 
          focus:outline-none
          p-2 
          rounded-xl
          focus:ring-2
          focus:ring-primaryblue/50
          transition-all
          duration-200
          ease-in-out
          ${inputClassName}
        `}
      />
    </div>
  )
}

export const TextareaField = ({ labelText, labelClassName = '', name, inputClassName = '', divClassName = '', ...props }) => {
  return (
    <div className={`flex flex-col gap-2 ${divClassName}`}>
      {labelText && <label htmlFor={name} className={`text-xl ${labelClassName}`}>{labelText}</label>}
      <textarea
        id={name}
        name={name}
        {...props}
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
      ></textarea>
    </div>
  )
}

export default MaskedInput;