import React, { FC, ReactElement } from "react";
import "./../../pages/StartPage/StartPage.css";
import { FormInputs } from "../formInputs/FormInputs";
import { ImageUploader } from "../ImageUploader/ImageUploader";
import { ImageSourceSelector } from "../ImageSourceSelector/ImageSourceSelector";
import {conversiorFile} from '../../utils/utilis';

interface FormBaseLoadProps {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    usernameError: string;
    setUsernameError: React.Dispatch<React.SetStateAction<string>>;
    imagePreview: string | null;
    setImagePreview: React.Dispatch<React.SetStateAction<string | null>>;
    imageSource: "file" | "url" | "webcam";
    setImageSource: React.Dispatch<React.SetStateAction<"file" | "url" | "webcam">>;
    enemy: boolean;
}

export const FormBaseLoad: FC<FormBaseLoadProps> = ({username, setUsername, usernameError, setUsernameError, imagePreview, setImagePreview, imageSource, setImageSource, enemy}):ReactElement => {

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   conversiorFile(e, setImagePreview)
  };

  const handleImageUrl = (url: string) => {
    setImagePreview(url);
  };

  return (
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
    </div>
  );
};
