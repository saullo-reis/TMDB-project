import styled from "styled-components";

export const Footer = () => {
  return (
    <Footers>
      <h4>Criado por Saullo Reis utilizando a API do TMDB.</h4>

      <A href="https://github.com/saullo-reis" target="_blank">
        GitHub
      </A>
      <A
        href="https://www.linkedin.com/in/saullo-reis-874852231/"
        target="_blank"
      >
        Linkedin
      </A>
    </Footers>
  );
};
const Footers = styled.section`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 20px;
  align-items: center;
  background-color: #545F66;
`;
const A = styled.a`
  text-decoration: none;
  font-weight: bold;
  &:hover {
    transform: scale(1.07);
    z-index: 2;
  }
`;
