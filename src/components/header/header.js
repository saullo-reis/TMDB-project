import styled from "styled-components";
import img from "../../assets/img/livrocerto.png";

export const Header = () => {
  return (
    <Section>
      <Div>
        <Img src={img}></Img>
        <H1>FilmsWiki</H1>
      </Div>
    </Section>
  );
};

const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const Section = styled.section`
  width: 100%;
  height:140px;
  background-color: #545F66;
  display: flex;
  justify-content: center;
`;
const H1 = styled.h1`
  font-weight: bold;
  font-size: 30px;
  color:#111111;
`;
const Img = styled.img`
  width: 50px;
`;
