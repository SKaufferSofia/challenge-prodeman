import { NextRequest, NextResponse } from "next/server";

const publicKey = "1f1fbcbb67c53cc2877b8e35ee18802a";
const hash = "7034f53029aec1c396828144ed6c27ac";

export async function GET(req: NextRequest) {
  const ts = "1";

  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  console.log("category", category);

  const url = `https://gateway.marvel.com/v1/public/${category}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: "Error desde Marvel API", marvelError: data },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error al contactar Marvel",
        error: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 }
    );
  }
}
