import openai from "./providers.ts";
enum Model {
  GPT_4_1_NANO = "gpt-4.1-nano",
}

export const autoCompleteModel = openai(Model.GPT_4_1_NANO);
