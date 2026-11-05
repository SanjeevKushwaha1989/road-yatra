import { isValidElement, type ReactNode } from "react";

/** Structured data (schema.org JSON-LD) for search engines. `<` is escaped so text can't close the script tag. */
export default function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

const BLOCKS = new Set(["p", "li", "ul", "ol", "div", "br"]);

/** Plain text of simple JSX (strings, numbers, nested elements), e.g. an FAQ answer for structured data. */
export function textOf(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) {
    const text = textOf(node.props.children);
    // Block elements (list items, paragraphs) are separated by a space so their words don't run together.
    return typeof node.type === "string" && BLOCKS.has(node.type) ? ` ${text} ` : text;
  }
  return "";
}
