import { NextRequest, NextResponse } from "next/server";

const publicKey = "1f1fbcbb67c53cc2877b8e35ee18802a";
const hash = "7034f53029aec1c396828144ed6c27ac";

export async function GET(req: NextRequest) {
  const ts = "1";
  const { searchParams } = new URL(req.url);

  const category = searchParams.get("category");
  const limit = searchParams.get("limit") || "20";
  const offset = searchParams.get("offset") || "0";
  const search = searchParams.get("search");
  const modifiedSince = searchParams.get("modifiedSince");

  if (!category) {
    return NextResponse.json(
      { message: "Falta el parámetro 'category'" },
      { status: 400 }
    );
  }

  const queryParams = new URLSearchParams();
  queryParams.set("limit", limit);
  queryParams.set("offset", offset);
  queryParams.set("ts", ts);
  queryParams.set("apikey", publicKey);
  queryParams.set("hash", hash);

  if (modifiedSince) {
    queryParams.set("modifiedsince", modifiedSince);
  }

  if (search) {
    if (category === "characters") {
      queryParams.set("nameStartsWith", search);
    } else {
      queryParams.set("titleStartsWith", search);
    }
  }

  const url = `https://gateway.marvel.com/v1/public/${category}?${queryParams.toString()}`;

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
