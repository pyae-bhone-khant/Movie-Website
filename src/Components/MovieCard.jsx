export default function MovieCard({movie}) {
    const addFavMovie =  () =>  {
         alert(`click`)
    }
    return (
        <div> 
            <div>
                <img src={movie.url} alt={movie.title} /> 
                <div>
                    <button onClick={addFavMovie}>❤️</button>
                </div>
            </div> 
            <div>
                <h3>{movie.title}</h3> 
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}