import { NextResponse } from "next/server";
import { prisma } from "../../client";

type Params = { params: { id: string } };

export async function PATCH(req: Request, { params }: Params) {
  try {
    const { id } = params;
    const { title, content } = await req.json();
    const post = await prisma.post.update({
      where: { id: id },
      data: { title, content },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    console.log("request error", err);
    NextResponse.json({ err: "error" }, { status: 500 });
  }
}
