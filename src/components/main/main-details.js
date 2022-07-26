import getMovie from "../../services/getMovie";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import infantil from "../../assets/img/infanitl.png"
import adulto from "../../assets/img/18.png"
import { Link } from "react-router-dom";
export const MainDetails = () => {
  const [film, setFilm] = useState([]);
  const { id } = useParams();

  console.log(id)
  useEffect(() => {
    const fetchData = async () => {
      const filmDetails = await getMovie(id)
      setFilm(filmDetails)
    };
    fetchData();
  }, []);

  return(
    <Section>
      <h1>{film.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w400/${film.poster_path}`}></img>
      <Ul>
        <li>
          <h2>Popularidade:</h2>
          <h3>{film.popularity}</h3>
        </li>
        <li>
          <h2>Data de Lançamento:</h2>
          <h3>{film.release_date}</h3>
        </li>
        <li>
          <h2>Pontuação Média:</h2>
          <h3>{film.vote_average}</h3>
        </li>
        <li>
          <h2>Idade Recomendada:</h2>
          {film.adult != true ? <h3>Para menores de 18</h3> : <h3>Para maiores de 18</h3>}
          {film.adult != true ? <img src={infantil}></img> :  <img src={adulto}></img>}
        </li>
      </Ul>
      <Link to={"/"}><h2>Voltar para a página inicial.</h2></Link>
    </Section>
  )
}

const Section = styled.section`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  a{ 
    text-decoration:none;
    color:purple;
  }
  a:hover{
    color:black;
    transition:0.6s;
  }
`
const Ul = styled.ul`
  display:flex;
  li{
    list-style-type:none;
    margin:20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    img{
      width:80px;
    }
  }
`