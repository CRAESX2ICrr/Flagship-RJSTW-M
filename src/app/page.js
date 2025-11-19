import Feed from "@/components/CardHero";
import Articles from "@/components/Articles";
import ShuffleHero from "@/components/ShuffleHero";   

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <main>

      <ShuffleHero /> 

    </main>
  );
}
