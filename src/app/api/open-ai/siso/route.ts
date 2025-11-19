import { NextResponse } from "next/server";
import { openAI } from "../config";

export async function POST(req: Request) {
  try {
    const { systemContent, userContent } = await req.json();
    const response = await openAI.chat.completions.create({
      messages: [
        { role: "system", content: systemContent },
        { role: "user", content: userContent },
      ],
      model: "openai/gpt-4o",
      temperature: 1,
      max_tokens: 4096,
      top_p: 1,
    });
    return NextResponse.json({
      message: response.choices[0].message.content,
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 },
    );
  }
}