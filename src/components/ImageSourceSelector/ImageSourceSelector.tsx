import React from "react";

interface Props {
  imageSource: "file" | "url" | "webcam";
  setImageSource: (value: "file" | "url" | "webcam") => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageUrl: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImageSourceSelector: React.FC<Props> = ({
  imageSource,
  setImageSource,
  handleImageChange,
  handleImageUrl,
}) => (
  <>
    <select
      className="text-input"
      value={imageSource}
      onChange={(e) => setImageSource(e.target.value as "file" | "url" | "webcam")}
    >
      <option value="file">From file</option>
      <option value="url">From URL</option>
      <option value="webcam">Use webcam</option>
    </select>

    {imageSource === "url" && (
      <input
        className="text-input"
        type="text"
        placeholder="Image URL"
        onChange={handleImageUrl}
      />
    )}

    {imageSource === "file" && (
      <>
        <label htmlFor="file-upload" className="file-upload-input">
          Select file
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
      <p className="webcam-placeholder">📷 Webcam functionality coming soon...</p>
    )}
  </>
);
