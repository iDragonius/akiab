// app/_server/nav-server.tsx (Server Component)
import { cache } from "react";
import { Footer } from "@/components/footer";

const getContact = cache(async () => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/contact`);
  url.searchParams.append("populate[0]", "socials");
  const res = await fetch(url.toString(), {
    next: { revalidate: 600 },
  });
  if (!res.ok) throw new Error("nav fetch failed");
  return res.json();
});

export default async function FooterServer() {
  const contact = await getContact();
  return <Footer contact={contact} />;
}
