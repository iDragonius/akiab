// app/_server/nav-server.tsx (Server Component)
import { cache } from "react";
import { Header } from "@/components/header";

const getNavigation = cache(async () => {
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/navigation?populate[navigations][populate]=*
  &populate[navigations][populate][subs][populate]=*
  &populate[navigations][populate][subs][populate][subs][populate]=*`,
    {
      next: { revalidate: 3600 },
    },
  );
  if (!r.ok) throw new Error("nav fetch failed");
  return r.json();
});

export default async function HeaderServer() {
  const navigation = await getNavigation();
  return <Header navigation={navigation} />;
}
