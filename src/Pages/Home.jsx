import MovieCard from "../Components/MovieCard";

export default function Home({movie}) {
    const movies = [
{ id: 1 ,title: "Tim' flim" , release_date: "2024"},
{ id: 2 ,title: "Tim' flim" , release_date: "2024"},
{ id : 3 ,title: "Tim' flim" , release_date: "2024"},
    ];
    return (
        <div>  
            <div className="grid">

         {movies.map((movie => <MovieCard key={movie.id} movie={movie} />))}
            </div>
        </div>
    )
}