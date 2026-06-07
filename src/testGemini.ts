import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function test() {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Say hello",
  });

  console.log(response.text);
}

test().catch(console.error);