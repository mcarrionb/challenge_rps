export const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if (reader.result) {
                resolve(reader.result as string);  
            } else {
                reject("Error al leer el archivo");  
            }
        };
        reader.onerror = () => {
            reject("Error al leer el archivo");  
        };
    });
};