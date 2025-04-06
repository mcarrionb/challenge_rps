import React from "react";
import { ImageWebCame } from "../ImageWebCame/ImageWebCame";
import {useTranslation} from 'react-i18next';

interface Props {
  imageSource: "file" | "url" | "webcam";
  setImageSource: (value: "file" | "url" | "webcam") => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageUrl: (url: string) => void;
  enemy?: boolean;
}

export const ImageSourceSelector: React.FC<Props> = ({
  imageSource,
  setImageSource,
  handleImageChange,
  handleImageUrl,
  enemy = false,
}) => {
    const { t } = useTranslation();
  
    const ImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleImageUrl(e.target.value)
   }

   return (
  <>
    <select
      className="text-input mb-4 cursor-pointer"
      value={imageSource}
      onChange={(e) => setImageSource(e.target.value as "file" | "url" | "webcam")}
    >
      <option value="file" className="text-indigo-900">{t("file")}</option>
      <option value="url" className="text-indigo-900">{t("url")}</option>
      <option value="webcam" className="text-indigo-900">{t("webcam")}</option>
    </select>

    {imageSource === "url" && (
      <input
        className="text-input"
        type="text"
        placeholder={t("placeholderUrl")}
        onChange={ImageUrl}
      />
    )}

    {imageSource === "file" && (
      <label htmlFor={`file-upload-${enemy ? 'enemy' : 'user'}`} className="text-input cursor-pointer flex items-left justify-left">
        <span>{t("selectFile")}</span>
        <input
          id={`file-upload-${enemy ? 'enemy' : 'user'}`}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
    )}

    {imageSource === "webcam" && (
      <ImageWebCame handleImageUrl={handleImageUrl}/>
    )}
  </>
   )
};
