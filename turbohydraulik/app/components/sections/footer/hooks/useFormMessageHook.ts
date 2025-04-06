"use client";
import { useState } from "react";
import { webhookUrl } from "@/app/constants/appConstants";

const useFormMessage = () => {
  const [phone, setPhone] = useState("");
  const [problem, setProblem] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone,
          problem,
          userPageUrl: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error("Wystąpił błąd podczas wysyłania formularza.");
      }

      setPhone("");
      setProblem("");
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch {
      setError("Nie udało się wysłać zgłoszenia.");
    } finally {
      setLoading(false);
    }
  };

  return {
    phone,
    setPhone,
    problem,
    setProblem,
    loading,
    error,
    success,
    handleSubmit,
  };
};

export default useFormMessage;
