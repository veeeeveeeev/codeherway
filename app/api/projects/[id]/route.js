import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Project from "@/models/Project";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const project = await Project.findById(id);

    return new NextResponse(JSON.stringify(project), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Project.findByIdAndDelete(id);

    return new NextResponse("Project has been deleted", {
      status: 200,
    });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { id } = params;
  const body = await request.json();
  try {
    await connect();

    const post = await Project.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
