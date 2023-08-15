import { Container, Title, ButtonsContainer } from "./header.style";

const Header = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ButtonsContainer>{children}</ButtonsContainer>
    </Container>
  );
};

export default Header;
