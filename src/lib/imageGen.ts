import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

async function generateImage(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
    });
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (error) {
    console.error("Image generation failed:", error);
  }
  return `https://picsum.photos/seed/${encodeURIComponent(prompt)}/800/600`;
}

export async function getPortfolioImages() {
  const hero = await generateImage("Futuristic AI neural network visualization, dark theme with warm terracotta and amber accents, cinematic lighting, high tech");
  const profile = await generateImage("Professional silhouette of a data scientist in a dark high-tech lab, warm lighting, cinematic");
  const projectPrompts = [
    "AI Image Generation interface abstract",
    "NLP Sentiment Analysis visualization",
    "Computer Vision face detection abstract",
    "AI Interview bot interface abstract",
    "Image Classification neural network layers",
    "Generative AI chatbot abstract"
  ];
  const projects = await Promise.all(projectPrompts.map(p => generateImage(p)));
  return { hero, profile, projects };
}