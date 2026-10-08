import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "showcases", "aura-partner-research.html");
  const html = fs.readFileSync(filePath, "utf-8");

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
