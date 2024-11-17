import React, { useState, useEffect } from "react";
import axios from "axios";

const geminiApiKey ='<API_KEY>';
const geminiEndpoint = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent";

const geminiClient = axios.create({
  headers: {
    "x-goog-api-key": geminiApiKey,
    "Content-Type": "application/json",
  },
});

function AiResponse({ prompt }) {
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await geminiClient.post(geminiEndpoint, {
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
        });

        const responseText = response.data.candidates[0]?.content?.parts[0]?.text || "No response";
        setResult(responseText);
      } catch (err) {
        console.error("Error fetching AI response:", err);
        setError("Sorry, something went wrong.");
      }
    };

    if (prompt) {
      fetchData();
    }
  }, [prompt]);

  return (
    <>
      {error ? <p style={{ color: "red", marginTop: "10%" }}>{error}</p> : <p><b>AI Analysis: <br></br></b>{result}</p>}
    </>
  );
}

export default AiResponse;
