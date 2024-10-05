import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const NoEncontrada = () => {
  return (
    <Container>
      <h1 >La ruta que intentas consultar no existe :/</h1>
      <h3 >Lamentamos el inconveniente</h3>
    </Container>
  );
};
export default NoEncontrada;
