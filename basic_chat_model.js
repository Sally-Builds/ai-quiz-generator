import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";

// Configure dotenv to load variables from .env
dotenv.config();

console.log(process.env.OPENAI_API_KEY);
const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
  //   apiKey: process.env.OPENAI_API_KEY,
});

const result = await model.invoke("Who is the President of Nigeria?");
console.log(result, "full");
console.log(result.content, "content");
