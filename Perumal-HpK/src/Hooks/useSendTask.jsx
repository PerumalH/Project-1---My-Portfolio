import { useState, useCallback } from "react";
import { API_GOOGLE_SHEET } from "../config";

function useSendTask() {
  const [loading, setLoading] = useState(false);

  const SendTaskAPI = useCallback(async (SendTaskData) => {
    setLoading(true);

    try {
      await fetch(API_GOOGLE_SHEET, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(SendTaskData),
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, SendTaskAPI };
}

export default useSendTask;
