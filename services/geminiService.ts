
import { GoogleGenAI, Type, Modality } from "@google/genai";

export const generateRomanticPoem = async (mood: string) => {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Write a deeply romantic, short poem (8-12 lines) for a girl named Mim. The mood should be ${mood}. Focus on her name 'Mim' and how special she is.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          poem: {
            type: Type.STRING,
            description: "The romantic poem generated for Mim."
          },
          theme: {
            type: Type.STRING,
            description: "A short label for the theme of the poem."
          }
        },
        required: ["poem", "theme"]
      }
    }
  });

  try {
    return JSON.parse(response.text.trim());
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return { poem: "In Mim's eyes, I see my home,\nA heart where I will always roam.\nMy love for her is pure and bright,\nMy guiding star through every night.", theme: "Eternal" };
  }
};

export const generateLetterSpeech = async (text: string) => {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-tts",
    contents: [{ parts: [{ text: `Say gently and romantically: ${text}` }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: 'Kore' },
        },
      },
    },
  });

  return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
};
