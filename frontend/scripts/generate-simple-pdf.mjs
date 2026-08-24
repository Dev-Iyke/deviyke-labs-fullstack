import fs from "node:fs";
import path from "node:path";

const sourcePath = path.resolve(
  "docs/blogs/conservation-of-knowledge-script.md",
);
const outputPath = path.resolve(
  "docs/blogs/conservation-of-knowledge-script.pdf",
);

const source = fs.readFileSync(sourcePath, "utf8").replace(/\r/g, "");

function normalizeParagraph(paragraph) {
  const trimmed = paragraph.trim();

  if (!trimmed) {
    return "";
  }

  if (trimmed.startsWith("- ")) {
    return trimmed;
  }

  return trimmed.replace(/\n+/g, " ");
}

function wrapLine(text, maxCharacters = 92) {
  const isBullet = text.startsWith("- ");
  const firstPrefix = isBullet ? "- " : "";
  const nextPrefix = isBullet ? "  " : "";
  const words = text.replace(/^- /, "").split(/\s+/).filter(Boolean);
  const lines = [];

  let current = firstPrefix;

  for (const word of words) {
    const candidate = current.trim().length
      ? `${current}${current.endsWith(" ") ? "" : " "}${word}`
      : `${firstPrefix}${word}`;

    if (candidate.length > maxCharacters && current.trim().length) {
      lines.push(current.trimEnd());
      current = `${nextPrefix}${word}`;
      continue;
    }

    current = candidate;
  }

  if (current.trim().length) {
    lines.push(current.trimEnd());
  }

  return lines;
}

function escapePdfText(value) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

const paragraphs = source.split("\n\n").map(normalizeParagraph).filter(Boolean);
const allLines = [];

for (const paragraph of paragraphs) {
  allLines.push(...wrapLine(paragraph));
  allLines.push("");
}

if (allLines[allLines.length - 1] === "") {
  allLines.pop();
}

const linesPerPage = 46;
const pageChunks = [];

for (let index = 0; index < allLines.length; index += linesPerPage) {
  pageChunks.push(allLines.slice(index, index + linesPerPage));
}

const fontObjectId = 3;
const contentObjectStart = 4;
const pageObjectStart = contentObjectStart + pageChunks.length;
const totalObjects = pageObjectStart + pageChunks.length - 1;

const objects = new Map();

objects.set(1, "<< /Type /Catalog /Pages 2 0 R >>");
objects.set(
  2,
  `<< /Type /Pages /Count ${pageChunks.length} /Kids [${pageChunks
    .map((_, index) => `${pageObjectStart + index} 0 R`)
    .join(" ")}] >>`,
);
objects.set(fontObjectId, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

pageChunks.forEach((lines, index) => {
  const contentObjectId = contentObjectStart + index;
  const pageObjectId = pageObjectStart + index;
  const streamLines = [
    "BT",
    "/F1 11 Tf",
    "15 TL",
    "54 738 Td",
    ...lines.flatMap((line) =>
      line.length ? [`(${escapePdfText(line)}) Tj`, "T*"] : ["T*"],
    ),
    "ET",
  ];

  const stream = streamLines.join("\n");

  objects.set(
    contentObjectId,
    `<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream`,
  );

  objects.set(
    pageObjectId,
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 ${fontObjectId} 0 R >> >> /Contents ${contentObjectId} 0 R >>`,
  );
});

let pdf = "%PDF-1.4\n";
const offsets = [0];

for (let id = 1; id <= totalObjects; id += 1) {
  offsets[id] = Buffer.byteLength(pdf, "utf8");
  pdf += `${id} 0 obj\n${objects.get(id)}\nendobj\n`;
}

const xrefOffset = Buffer.byteLength(pdf, "utf8");

pdf += `xref\n0 ${totalObjects + 1}\n`;
pdf += "0000000000 65535 f \n";

for (let id = 1; id <= totalObjects; id += 1) {
  pdf += `${String(offsets[id]).padStart(10, "0")} 00000 n \n`;
}

pdf += `trailer\n<< /Size ${totalObjects + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

fs.writeFileSync(outputPath, pdf, "utf8");

console.log(`Generated ${outputPath}`);
