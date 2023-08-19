import {
  Container,
  Title,
  ButtonsContainer,
} from "./navbar.style";

export const Navbar = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ButtonsContainer>{children}</ButtonsContainer>
    </Container>
  );
};

// export default Header;
