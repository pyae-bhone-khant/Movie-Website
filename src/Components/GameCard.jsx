export default function GameCard({ game }) {
  const handleInstall = () => {
    alert(`You clicked install for ${game.title}`);
  };

  return (
    <div className="flex justify-center">
      <div className="w-[280px] bg-gray-600 rounded-2xl overflow-hidden shadow-lg">
        {/* Image container */}
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={game.thumbnail || "https://via.placeholder.com/280x180?text=No+Image"}
            alt={game.title}
          />
          {/* Install button */}
          <button
            className="absolute top-2 right-2 px-3 py-1 bg-green-400 rounded-2xl hover:bg-green-500 transition"
            onClick={handleInstall}
          >
            Install
          </button>
        </div>
        {/* Game info */}
        <div className="p-2">
          <h3 className="text-xl font-bold">{game.title}</h3>
          <p className="opacity-80">{game.release_date}</p>
        </div>
      </div>
    </div>
  );
}
