import React from 'react';
import {validacionName} from './validacionInputs';
import {mostrarError} from './NotiToast';
import {useTranslation} from 'react-i18next';




export const firstUpper = (texto: string): string => {
  if (!texto) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1);
};

export const conversiorFile = (e: React.ChangeEvent<HTMLInputElement>, setImagePreview: React.Dispatch<React.SetStateAction<string | null>> ) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  }
};

// export  const handleStart = (username: string, validationMsg: string, imagePreview: string) => {
//       validationMsg = validacionName(username);
//       if (validationMsg != "") {
//         mostrarError(validationMsg)
//       } else {
//         if (imagePreview) {
//           navigate("/game", {
//             state: {
//               username,
//               image: imagePreview,
//             },
//           });
//         } else {
//           mostrarError(t('errorImg'))
//         }
//       }
//     }