import { getName } from "../../services/getMovie";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const [values, setValue] = useState("");
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (values != "") {
        const Film = await getName(values);
        setFilms(Film.results);
      } else {
        return;
      }
    };
    fetchData();
  }, [values]);
  return (
    <Section>
      <Div>
        <Input
          type="text"
          value={values}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Escreva o nome do filme"
        ></Input>
      </Div>
      <Ul>
        {values != "" ? (
          films.map((film, index) => {
            {
              return (
                <Link to={`/movie/${film.id}`} key={index}>
                  <Li key={index}>
                    <Img
                      src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                    ></Img>
                    <h2>{film.title}</h2>
                  </Li>  
                </Link>
              );
            }
          })
        ) : (
          <h2>Escreva o nome do filme!</h2>
        )}
      </Ul>
    </Section>
  );
};

const Section = styled.section`
  background-color:#ffffff;
`

const Img = styled.img`
  width:200px;
`

const Input = styled.input`
  width: 20%;
  height: 30px;
  margin: 20px;
  padding: 5px;
  border-radius: 20px;
`;
const Div = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  padding: 30px;
  li{
    background-color:#ffffff;
  }
  li:hover {
    background-color: #111111;
    transition: 0.4s;
    color:#ffffff;
  }
  a{
    text-decoration:none;
    color:black;
  }
`;

const Li = styled.li`
  cursor: pointer;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 260px;
  height: 500px;
  margin: 3px;
  border: solid 1px #b0a3d4;
  padding: 20px;
`;
