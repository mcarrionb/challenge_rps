
export function validacionName(name: string, t: (key: string) => string) {
    if (!name.trim()) {
        return t('validationNameBlank');
    } else if (name.length < 3) {
        return t('validatioName3Leters'); 
    }
    return "";
}
