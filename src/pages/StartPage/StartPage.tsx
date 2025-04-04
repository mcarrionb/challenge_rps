import React, { useState } from "react";
import "./StartPage.css";
import { useNavigate } from "react-router-dom";
import { validacionName } from "../../utils/validacionInputs";
import { FormInputs } from "../../components/formInputs/FormInputs";
import { ImageUploader } from "../../components/ImageUploader/ImageUploader";
import { ImageSourceSelector } from "../../components/ImageSourceSelector/ImageSourceSelector";
import {NotiToastError} from '../../components/NotiToast/NotiToastError';
import { mostrarError } from "../../utils/NotiToast";
import { useTranslation } from 'react-i18next';

export const StartPage: React.FC = () => {
  const { t } = useTranslation();
  
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageSource, setImageSource] = useState<"file" | "url" | "webcam">("file");

  let validationMsg: string = "";


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };


  const handleImageUrl = (url: string) => {
    setImagePreview(url);
  };



  const handleStart = () => {
    validationMsg = validacionName(username);
    if (validationMsg != "") {
      mostrarError(validationMsg)
    } else {
      if (imagePreview) {
        navigate("/game", {
          state: {
            username,
            image: imagePreview,
          },
        });
      } else {
        mostrarError(t('errorImg'))
      }
    }


  };

  return (
    <div className="user-form">
      <div className="form-card">
        <h1 className="h1-part1">{t("startPageTitleP1")}</h1>
        <h1 className="h1-part2">{t("startPageTitleP2")}</h1>

        {/* Div to preview the image */}
        <ImageUploader imagePreview={imagePreview} />


        {/* Selector to choose the source of the image */}
        <ImageSourceSelector
          imageSource={imageSource}
          setImageSource={setImageSource}
          handleImageChange={handleImageChange}
          handleImageUrl={handleImageUrl}
        />


        {/* Username text input */}
        <FormInputs
          name={username}
          setName={setUsername}
          error={usernameError}
          setError={setUsernameError}

        />

        {/* Start game btn */}
        <button className="start-game-button" onClick={handleStart}>
          {t("buttonStart")}
        </button>

      </div>

      

      < NotiToastError />
    </div>
  );
};
