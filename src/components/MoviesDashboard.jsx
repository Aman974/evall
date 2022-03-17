import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
// const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const getAllMovies = () => {
    setLoading(true);
    axios({
      method: "get",
      url: "https://movie-fake-server.herokuapp.com/data"
    })
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
  };

  // to get all movies list on component mounts
  useEffect(() => {
    //   dispatch an action to the store
       getAllMovies();
  }, []);
  console.log(data);
  //    filter by genre
  const handleFilter = (e) => {
    // dispach filterby genre action to the store
  };
  return (
    <>
      <h2>Movies</h2>
      <select onChange={handleFilter}>{/* map through the filter  */}</select>
      <div className="movies-list">
        {loading && <h2> Loading..</h2>}

         
        {!loading && data && data.map((item)=> {
            
          return <> 
          <Link key = {item.id} to={`/movies/$(item.id)`} > {item.id}{item.movie_name}{item.genre}{<img src={item.image_url} alt = "movie image" height={"80px"} width ="60px"/>} </Link>
          
          </> 
        }
        
        )}
        {/* map throught th movie list and display the results */}
      </div>
    </>
  );
};

export default MoviesDashboard;
