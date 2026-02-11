import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        { id: 1, name: "田中太郎" },
        { id: 2, name: "佐藤花子" },
        { id: 3, name: "鈴木一郎" },
    ])
}