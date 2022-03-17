import {Route, Routes} from "react-router-dom"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import About from "../components/About"
import MoviesDashboard from "../components/MoviesDashboard"
import SingleMovieDetails from "../components/SingleMovieDetails"

export const MainRoutes = ()=>{
    return(
        <div> 
            <h1> </h1>
        <Routes>
            
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />  
          <Route path="/movies" element={<MoviesDashboard/>} />      
          <Route path="/movies/:movieId" element={<SingleMovieDetails/>} />     
        </Routes>
        </div>
    )
}

export default MainRoutes