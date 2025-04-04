import React from "react";
import { ImageWebCame } from "../ImageWebCame/ImageWebCame";
import {useTranslation} from 'react-i18next';

interface Props {
  imageSource: "file" | "url" | "webcam";
  setImageSource: (value: "file" | "url" | "webcam") => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageUrl: (url: string) => void;
}



export const ImageSourceSelector: React.FC<Props> = ({
  imageSource,
  setImageSource,
  handleImageChange,
  handleImageUrl,
}) => {
    const { t } = useTranslation();
  
    const ImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleImageUrl(e.target.value)
   }

   return (
  <>
    <select
      className="text-input"
      value={imageSource}
      onChange={(e) => setImageSource(e.target.value as "file" | "url" | "webcam")}
    >
      <option value="file">{t("file")}</option>
      <option value="url">{t("url")}</option>
      <option value="webcam">{t("webcam")}</option>
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
      <>
        <label htmlFor="file-upload" className="file-upload-input">
          {t("selectFile")}
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file-input"
        />
      </>
    )}

    {imageSource === "webcam" && (
      // <p className="webcam-placeholder">📷 Webcam functionality coming soon...</p>
      <ImageWebCame handleImageUrl={handleImageUrl}/>
    )}
  </>
   )
};
