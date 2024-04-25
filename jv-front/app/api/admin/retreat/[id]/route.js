import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Retreat from "@/models/retreat";

export async function PUT(req, context) {
  await dbConnect();

  const body = await req.json();

  try {
    const updatedRetreat = await Retreat.findByIdAndUpdate(
      context.params.id,
      {
        ...body,
      },
      { new: true }
    );
    return NextResponse.json(updatedRetreat);
  } catch (err) {
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req, context) {
  await dbConnect();

  try {
    const deletedRetreat = await Retreat.findByIdAndDelete(context.params.id);
    return NextResponse.json(deletedRetreat);
  } catch (err) {
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
