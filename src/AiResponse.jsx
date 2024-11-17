//import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function AiResponse(props) {
  
    const apiKey = "AIzaSyDG6LPSj_ROx3v8yQmiSFLjqEZObXeR-uE";
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = props.prompt;
    
    const result = model.generateContent(prompt);

  return (
    <>
    <p>{prompt}</p>
    <br></br>
    <p>{result}</p>
    </>
  );
}

export default AiResponse;
