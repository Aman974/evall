import axios from "axios"
import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

export const SingleMovieDetails = () => {
 const {movieId} = useParams()
 const [data, setData] = useState(null)

 useEffect(() => {
   axios ({
     method: "get",
     url: `https://movie-fake-server.herokuapp.com/data/movies/${movieId}`
    }).then(res=>setData(res.data))
   .catch(err=>console.log(err))
 }, [movieId])

 return (
  <>
  <h1> Single Movie </h1>
   {data && <> 
   <h2>{data.movie_name} </h2>
   <img src={data.image_url} />
   </> }
   
  </>  

 )
  }

export default SingleMovieDetails