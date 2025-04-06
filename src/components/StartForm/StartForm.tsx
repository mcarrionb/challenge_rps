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
    <div className="start-container">
      <div className={verEnemyForm ? "start-content form-card-enemy" : "start-content"}>
        <div className={verEnemyForm ? "form-dual" : "form-indi"}> 
          <h1 className="profile-title text-lg">
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


        <div className={verEnemyForm ? "form-dual" : " form-hidden"}>
          <h1 className="profile-title text-lg">
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
        <button className="confirm-button rounded-xl" onClick={handleStart}>
            {t('confirm')}
          </button>

      </div>
      < NotiToastError />
    </div>
  );
};
