import {
  AIMessage,
  ChatMessage,
  HumanMessage,
  SystemMessage,
} from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";

// Configure dotenv to load variables from .env
dotenv.config();

const messages = [
  new SystemMessage("Solve the following math problems"),
  new HumanMessage("What is 100 modulus 8"),
];

console.log(process.env.OPENAI_API_KEY);
const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
  //   apiKey: process.env.OPENAI_API_KEY,
});

let result = await model.invoke(messages);
console.log(result.content, "Answer");

messages.push(new AIMessage("What is 100 modulus 8 is 4>"));
messages.push(new HumanMessage("The previous answer you gave me times 12 is?"));

result = await model.invoke(messages);
console.log(result, "final answer");
console.log(result.content, "final answer");
