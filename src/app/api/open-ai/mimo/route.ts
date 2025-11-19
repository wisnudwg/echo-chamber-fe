import { NextResponse } from "next/server";
import { openAI } from "../config";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Message array is required" },
        { status: 400 },
      )
    };

    const response = await openAI.chat.completions.create({
      messages,
      model: "openai/gpt-4o",
      temperature: 1,
      max_tokens: 4096,
      top_p: 1,
    });

    return NextResponse.json({
      message: response.choices[0].message.content,
      finishReason: response.choices[0].finish_reason,
      tokenUsed: response.usage?.total_tokens,
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 },
    );
  }
}