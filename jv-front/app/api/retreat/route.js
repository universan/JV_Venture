import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Retreat from "@/models/retreat";
import queryString from "query-string";

export async function GET(req) {
  await dbConnect();
  const searchParams = queryString.parseUrl(req.url).query;
  const { page } = searchParams || {};
  const pageSize = 6;

  try {
    const currentPage = Number(page) || 1;
    const skip = (currentPage - 1) * pageSize;
    const totalRetreats = await Retreat.countDocuments({});

    const retreats = await Retreat.find({})
      .skip(skip)
      .limit(pageSize)
      .sort({ createdAt: -1 });

    return NextResponse.json({
      retreats,
      currentPage,
      totalPages: Math.ceil(totalRetreats / pageSize),
    });
  } catch (err) {
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
