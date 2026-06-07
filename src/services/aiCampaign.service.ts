import { GoogleGenAI } from "@google/genai";

export async function generateCampaign(
  customerName: string,
  segment: string,
  category: string
): Promise<string> {

  console.log("API KEY EXISTS:", !!process.env.GEMINI_API_KEY);
  console.log(
    "API KEY STARTS WITH:",
    process.env.GEMINI_API_KEY?.slice(0, 10)
  );

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
  });

  const prompt = `
You are a customer retention specialist.

Customer Name: ${customerName}
Customer Segment: ${segment}
Last Purchased Category: ${category}

Generate a personalized re-engagement marketing message.

Rules:
- Maximum 3 sentences
- Friendly tone
- Encourage customer to return
- Mention the customer's last purchased category
- Do not use placeholders
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text ?? "";
}