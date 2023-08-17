import { Container, Title, ButtonsContainer } from "./header.style";

export const Navbar = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ButtonsContainer>{children}</ButtonsContainer>
    </Container>
  );
};

// export default Header;
