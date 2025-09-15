import { Link } from "react-router-dom"
 export default function Navbar()  {
    return (
       <nav className="flex justify-between bg-black text-blue-600 w-full py-4 px-20 items-center gap-8  mb-8">
        <div>
            <Link to="/">Game Store</Link>
        </div>
         <div className="space-x-10" >
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
         </div>
       </nav>
    )
}
