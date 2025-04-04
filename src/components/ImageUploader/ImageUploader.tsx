import React from "react";

interface Props {
  imagePreview: string | null;
}

export const ImageUploader: React.FC<Props> = ({ imagePreview }) => (
  <div className="image-preview-container">
    {imagePreview ? (
      <img src={imagePreview} alt="Avatar" className="avatar-preview" />
    ) : (
      <div className="avatar-placeholder">No Image</div>
    )}
  </div>
);
