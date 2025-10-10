
export const MaskCurrency = (value) => {
    if (!value) return '';
    value = value.replace(/\D/g, '');
    value = (Number(value) / 100).toFixed(2) + '';
    value = value.replace('.', ',');
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return 'R$ ' + value;
};

export const MaskPhone = (value) => {
    if (!value) return '';
    value = value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 10) {
        return value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
        return value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
        return value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    }
    return value;
};

export const MaskCEP = (value) => {
    if (!value) return '';
    value = value.replace(/\D/g, ''); // remove tudo que não for número
    value = value.slice(0, 8); // limita a 8 dígitos

    if (value.length > 5) {
        return value.replace(/^(\d{5})(\d{0,3})$/, '$1-$2');
    }
    return value;
};


export const MaskCPF = (value) => {
    if (!value) return '';
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return value;
};

export const MaskCNPJ = (value) => {
    if (!value) return '';
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');
    return value;
};
