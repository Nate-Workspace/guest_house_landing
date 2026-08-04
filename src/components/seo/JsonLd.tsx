import { serializeJsonLd } from "@/lib/seo";

type JsonLdProps = {
  data: object | object[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
