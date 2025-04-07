import React from "react";
import "./StartPage.css";
import { StartForm } from "../../components/StartForm/StartForm";
import {NotiToastError} from '../../components/NotiToast/NotiToastError';

export const StartPage: React.FC = () => {
  return (
    <div className="start-container flex items-center justify-center min-h-screen w-full p-4">
      <StartForm />
      <NotiToastError />

    </div>
  );
};