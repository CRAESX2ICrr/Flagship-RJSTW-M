export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black">
      <img
        src="/images/loading.gif"
        alt="Loading..."
        className="w-screen h-screen object-cover"
      />
    </div>
  );
}
