import Project from "@/models/Project";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connect();
    const projects = await Project.find();
    return new NextResponse(JSON.stringify(projects), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newProject = new Project(body);

  try {
    await connect();

    await newProject.save();

    return new NextResponse(JSON.stringify(newProject), {
      status: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
