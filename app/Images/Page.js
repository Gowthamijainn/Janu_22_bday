import Navbar from "../components/Navbar";

export default function Images() {
  return (
    <div className="bg-gradient-to-b from-pink-300 to-red-400 min-h-screen text-white">
      <Navbar />
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold">Cute Love GIFs 🧸💕</h1>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <img src="/hugging.gif" alt="Hugging Teddy" className="w-40 rounded-lg shadow-lg" />
          <img src="/kissing.gif" alt="Kissing Teddy" className="w-40 rounded-lg shadow-lg" />
          <img src="/caring.gif" alt="Balloon Teddy" className="w-40 rounded-lg shadow-lg" />
          <img src="/Love.gif" alt="Gift Teddy" className="w-40 rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}
