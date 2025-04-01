import React, { useState } from "react";
import "./StartPage.css";
import { useNavigate } from "react-router-dom";
import { validacionName } from "../../components/formInputs/validacionInputs";
import { FormInputs } from "../../components/formInputs/FormInputs";
import { ImageUploader } from "../../components/ImageUploader/ImageUploader";
import { ImageSourceSelector } from "../../components/ImageSourceSelector/ImageSourceSelector";

export const StartPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageSource, setImageSource] = useState<"file" | "url" | "webcam">("file");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImagePreview(e.target.value);
  };

  const handleStart = () => {
    const validationMsg = validacionName(username);
    setUsername(validationMsg);

    if (validationMsg) return;

    if (imagePreview) {
      navigate("/game", {
        state: {
          username,
          image: imagePreview,
        },
      });
    } else {
      alert("Choose a image");
    }
  };

  return (
    <div className="user-form">
      <div className="form-card">
        <h1 className="h1-part1">ENTER YOUR</h1>
        <h1 className="h1-part2">NAME</h1>

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
          Start
        </button>
        
      </div>
    </div>
  );
};
