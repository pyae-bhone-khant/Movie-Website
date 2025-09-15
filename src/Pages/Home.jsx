// Home.jsx
import GameCard from "../Components/GameCard";
import { useState, useEffect } from "react";
import { getGames } from "../Services/api";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const allGames = await getGames();
        setGames(allGames);
      } catch (err) {
        console.error(err);
        setError("Failed to load games");
      } finally {
        setLoading(false);
      }
    };
    loadGames();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // optional: you can filter here or just use searchQuery in rendering
  };

  const inputHandleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-center mt-10 mb-8 gap-2">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for games ..."
            className="w-[200px] h-9 bg-gray-700 sm:w-50 md:w-60 lg:w-80 rounded px-2"
            value={searchQuery}
            onChange={inputHandleChange}
          />
          <button
            type="submit"
            className="bg-red-600 h-9 px-6 ml-3 md:px-4 sm:px-4"
          >
            Search
          </button>
        </form>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
