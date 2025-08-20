import { createOpenAI } from "@ai-sdk/openai";
import { config } from "dotenv";
config();

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default openai;
