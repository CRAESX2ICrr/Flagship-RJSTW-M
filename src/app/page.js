import Feed from "@/components/Feed";
import Articles from "@/components/Articles";

export default async function Home() {
  // small delay to simulate loading (reduced from 5s)
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <main>

      <Feed />

      {/* Hero: centered welcome and scroll indicator */}
      <section className="min-h-[30vh] flex flex-col items-center justify-center text-center gap-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
          Welcome
        </h1>

        <p className="text-base sm:text-lg text-gray-600 max-w-xl">
          Scroll below
        </p>
      </section>

      <Articles />

      <Scores />

    </main>
  );
}
