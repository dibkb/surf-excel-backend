import { generateText } from "ai";
import { autoCompleteModel } from "./model.ts";

const generateSuggestions = async (article: string) => {
  const { text } = await generateText({
    model: autoCompleteModel,
    system:
      "You are a professional writer. " +
      "You write simple, clear, and concise content.",
    prompt: `Summarize the following article in 3-5 sentences: ${article}`,
  });
  return text;
};

export default generateSuggestions;
