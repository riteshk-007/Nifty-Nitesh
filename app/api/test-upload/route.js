import { NextResponse } from "next/server";

// Configure for larger file uploads
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST(request) {
  try {
    console.log(
      "Test upload - Content-Type:",
      request.headers.get("content-type")
    );

    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        {
          error: "Invalid content type",
          received: contentType,
          expected: "multipart/form-data",
        },
        { status: 400 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file");

    console.log("Test upload - File received:", {
      hasFile: !!file,
      fileName: file?.name,
      fileType: file?.type,
      fileSize: file?.size,
    });

    return NextResponse.json({
      success: true,
      message: "Test upload successful",
      fileInfo: {
        name: file?.name,
        type: file?.type,
        size: file?.size,
      },
    });
  } catch (error) {
    console.error("Test upload error:", error);
    return NextResponse.json(
      {
        error: "Test upload failed",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
