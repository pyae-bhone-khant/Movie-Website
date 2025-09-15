import MovieCard from "./Components/GameCard.jsx"
import Home from "./Pages/Home.jsx"
import { Route , Routes } from "react-router-dom"
import Favorites from "./Pages/Favorites.jsx"
import Navbar from "./Components/Navbar.jsx"



export default function App() {
  return (    
      <div className="bg-gray-800 w-screen  min-h-screen text-white"> 
      <Navbar />
      <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="favorites" element={<Favorites />} />

          </Routes>
      </main>
      </div>

  )
}