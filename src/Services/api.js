const BASE_URL = "/api";

export const getGames = async () => {
  const response = await fetch(`${BASE_URL}/games`);
  return await response.json();
};

export const searchGames = async (titleQuery) => {
  const all = await getGames();
  return all.filter((game) =>
    game.title.toLowerCase().includes(titleQuery.toLowerCase())
  );
};

export const getGameDetails = async (gameId) => {
  const response = await fetch(`${BASE_URL}/game?id=${gameId}`);
  return await response.json();
};
