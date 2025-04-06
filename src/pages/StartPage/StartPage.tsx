import React, { useState } from "react";
import "./StartPage.css";
import { useNavigate } from "react-router-dom";
import { validacionName } from "../../utils/validacionInputs";
import { FormInputs } from "../../components/formInputs/FormInputs";
import { ImageUploader } from "../../components/ImageUploader/ImageUploader";
import { ImageSourceSelector } from "../../components/ImageSourceSelector/ImageSourceSelector";
import { Bounce, ToastContainer, toast } from 'react-toastify';

export const StartPage: React.FC = () => {
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

  const mostrarError = (error: string) => (toast.error(error, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  }));

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
        mostrarError("Choose a image")
      }
    }


  };

  return (
    <div className="start-container">
      <div className="start-content">
        <h1 className="profile-title">
          PROFILE
          <br />
          SETUP
        </h1>


        <div className="profile-form">
          {/* Div to preview the image */}
          <ImageUploader imagePreview={imagePreview} />


          <div className="input-group">
            {/* Selector to choose the source of the image */}
            <ImageSourceSelector
              imageSource={imageSource}
              setImageSource={setImageSource}
              handleImageChange={handleImageChange}
              handleImageUrl={handleImageUrl}
            />
          </div>


          {/* Username text input */}
          <FormInputs
            name={username}
            setName={setUsername}
            error={usernameError}
            setError={setUsernameError}

          />

          {/* Start game btn */}
          <button className="confirm-button rounded-xl" onClick={handleStart}>
            CONFIRM
          </button>

        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};