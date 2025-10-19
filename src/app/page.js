import Feed from "@/components/Feed";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const isMobile = false;

  return (
    <main>
      <Feed />
    </main>
  );
}
