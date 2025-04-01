export function validacionName(name: string) {
    if (!name.trim()) {
        return "El nombre es obligatorio";
    } else if (name.length < 3) {
            return "El nombre debe tener almenos 3 caracteres";
    }
    return "";
}

export const validarUrl = (url: string) => {
    const regex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i;
    return regex.test(url);
};


