/**
 * Renders one or more schema.org objects as a JSON-LD script tag.
 * Null entries are skipped, so callers can pass optional schemas directly.
 */
export function JsonLd({ data }: { data: object | null | (object | null)[] }) {
  const items = (Array.isArray(data) ? data : [data]).filter(Boolean) as object[];
  if (items.length === 0) return null;
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // `<` is escaped so CMS text can never close the script tag early.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, '\\u003c') }}
        />
      ))}
    </>
  );
}
