
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCurriculumAdvise = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest a learning system framework for the topic: "${topic}". 
      Format as JSON with "frameworkName", "steps" (array), and "suggestedVaultCategory" (one of: Behavior, Thinking, Literacy, Math, Operations).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            frameworkName: { type: Type.STRING },
            steps: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            suggestedVaultCategory: { type: Type.STRING }
          },
          required: ["frameworkName", "steps", "suggestedVaultCategory"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
