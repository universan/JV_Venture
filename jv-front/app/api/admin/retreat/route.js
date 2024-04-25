import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Retreat from "@/models/retreat";
import slugify from "slugify";

export async function POST(req) {
  await dbConnect();
  const body = await req.json();

  try {
    const retreat = await Retreat.create({
      ...body,
      slug: slugify(body.title),
    });
    return NextResponse.json(retreat);
  } catch (err) {
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
