import Feed from "@/components/Feed";
import Articles from "@/components/Articles";
import ShuffleHero from "@/components/ShuffleHero";   // ✅ FIXED

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <main>

      <Feed />

      <ShuffleHero />   {/* ✅ Now it will appear */}

      <Articles />

    </main>
  );
}
