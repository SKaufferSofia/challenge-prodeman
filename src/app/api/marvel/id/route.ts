import { NextRequest, NextResponse } from "next/server";

const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
const hash = process.env.NEXT_PUBLIC_MARVEL_HASH;

export async function GET(req: NextRequest) {
  const ts = "1";
  const { searchParams } = new URL(req.url);

  const category = searchParams.get("category");
  const id = searchParams.get("id");
  const search = searchParams.get("search");
  const modifiedSince = searchParams.get("modifiedSince");

  if (!category) {
    return NextResponse.json(
      { message: "Falta el parámetro 'category'" },
      { status: 400 }
    );
  }

  const queryParams = new URLSearchParams();

  queryParams.set("ts", ts);
  queryParams.set("apikey", publicKey || "");
  queryParams.set("hash", hash || "");

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

  const url = `https://gateway.marvel.com/v1/public/${category}?${queryParams.toString()}/${id}`;

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
