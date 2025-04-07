import React, { FC, ReactElement, useState } from "react";
import "./../../pages/StartPage/StartPage.css";
import "./StartForm.css";

import { useNavigate } from "react-router-dom";
import { validacionName } from "../../utils/validacionInputs";
import {NotiToastError} from '../../components/NotiToast/NotiToastError';
import { mostrarError } from "../../utils/NotiToast";
import { useTranslation } from 'react-i18next';
import { FormBaseLoad } from "../FormBaseLoad/FormBaseLoad";



export const StartForm: FC = ():ReactElement => {
  const { t } = useTranslation();
  
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageSource, setImageSource] = useState<"file" | "url" | "webcam">("file");
  const [usernameEnemy, setUsernameEnemy] = useState("");
  const [usernameErrorEnemy, setUsernameErrorEnemy] = useState("");
  const [imagePreviewEnemy, setImagePreviewEnemy] = useState<string | null>(null);
  const [imageSourceEnemy, setImageSourceEnemy] = useState<"file" | "url" | "webcam">("file");

  let validationMsg, validationMsgEnemy: string = "";
  const [verEnemyForm, setVerEnemyForm] = useState<boolean>(false);
  

  const cambiarVerEnemy = () => {
    if (!verEnemyForm) {
      setVerEnemyForm(!verEnemyForm)
    } else {
      setVerEnemyForm(!verEnemyForm)

      setUsernameEnemy("")
      setUsernameErrorEnemy("")
      setImagePreviewEnemy(null)
      setImageSourceEnemy("file");
    }
  };

  const handleStart = () => {
    validationMsg = validacionName(username, t);
    validationMsgEnemy = validacionName(usernameEnemy, t);

    if (validationMsg != "") {
      mostrarError(t('errorToastU') + validationMsg)
    } else if (validationMsgEnemy != "" && verEnemyForm) {
      mostrarError(t('errorToastE') + validationMsgEnemy)

    } else {
      if (imagePreview == null) {
        mostrarError(t('errorToastU') + t('errorImg'))
      } else if (imagePreviewEnemy == null && verEnemyForm) {
        mostrarError(t('errorToastE') + t('errorImg'))
      } else {
        navigate("/game", {
          state: {
            username,
            image: imagePreview,
            usernameEnemy,
            imageEnemy: imagePreviewEnemy,
          },
        });
      }
    }


  };

  return (
    <div className={`start-content w-full max-w-[90%] sm:max-w-[80%] p-4 sm:p-6 md:p-8 ${verEnemyForm ? "md:max-w-[1024px]" : "md:max-w-[600px]"}`}>
      <div className={`flex flex-col md:flex-row gap-6 ${verEnemyForm ? "md:gap-12 lg:gap-16 md:justify-between" : "md:justify-center"}`}>
        <div className={`w-full ${verEnemyForm ? "md:w-[45%]" : "md:max-w-[500px]"}`}>
          <h1 className="profile-title text-2xl sm:text-3xl md:text-4xl">
            {t("startPageTitleP1")}
            <br />
            {t("startPageTitleP2")}
          </h1>

          <FormBaseLoad  
            username={username}
            setUsername={setUsername}
            usernameError={usernameError}
            setUsernameError={setUsernameError}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
            imageSource={imageSource}
            setImageSource={setImageSource} 
            enemy={false}
          />
        </div>

        <div className={`w-full ${verEnemyForm ? "md:w-[45%] block" : "hidden"}`}>
          <h1 className="profile-title text-2xl sm:text-3xl md:text-4xl">
            {t("startPageTitleEnemyP1")}
            <br />
            {t("startPageTitleEnemyP2")}
          </h1>

          <FormBaseLoad  
            username={usernameEnemy}
            setUsername={setUsernameEnemy}
            usernameError={usernameErrorEnemy}
            setUsernameError={setUsernameErrorEnemy}
            imagePreview={imagePreviewEnemy}
            setImagePreview={setImagePreviewEnemy}
            imageSource={imageSourceEnemy}
            setImageSource={setImageSourceEnemy} 
            enemy={true}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 mt-6">
        <label htmlFor="show-enemy-form" className="custom-checkbox">
          <input
            id="show-enemy-form"
            type="checkbox"
            checked={verEnemyForm}
            onChange={cambiarVerEnemy}
            className="checkbox-input"
          />
          {t('showFormEnemy')}
        </label>

        {/* Start game btn */}
        <button 
          className="confirm-button w-full sm:w-auto px-8 sm:px-16 py-3 sm:py-4 rounded-xl text-base sm:text-lg"
          onClick={handleStart}
        >
          {t('confirm')}
        </button>
      </div>

      <NotiToastError />
    </div>
  );
};
