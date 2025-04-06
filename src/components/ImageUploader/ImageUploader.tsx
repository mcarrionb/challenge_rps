import React, { ReactElement } from "react";
import {useTranslation} from 'react-i18next';

interface Props {
  imagePreview: string | null;
}

export const ImageUploader: React.FC<Props> = ({ imagePreview }): ReactElement => {
  const { t } = useTranslation();
  
  return (
  <div className="image-preview-container">
    {imagePreview ? (
      <img src={imagePreview} alt="Avatar" className="avatar-preview" />
    ) : (
      <div className="avatar-placeholder">{t("avatar")}</div>
    )}
  </div>
  )
};
