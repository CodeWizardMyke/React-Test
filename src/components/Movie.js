import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Movies (props) {
    const moviesDb = [
        {
            "id":1,
            "title":"Avatar"
        },
        {
            "id":2,
            "title":"Senhor dos aneis"
        },
        {
            "id":3,
            "title":"Star Wars"
        },
    ]
    
    const {id} = useParams(); /* ela vem como string e temos que converter para number como abaixo no movieDb.filter */
    const data = moviesDb.filter(movie => movie.id === Number(id) )
    const movie = data[0]
    
    const navigate = useNavigate();
    
    const navigateHanddlerToHome = () =>{
        navigate('/')
    }
    console.log(movie)

    return(
        <div style={{textAlign:"center", padding:15}}>
            <h1 style={{padding:15}} >Titulo do filme: {movie.title}</h1>
            <button type="submit" className="buton butonPrimary" onClick={navigateHanddlerToHome}>Return to HomePage</button>
        </div>
    )
}

export default Movies;