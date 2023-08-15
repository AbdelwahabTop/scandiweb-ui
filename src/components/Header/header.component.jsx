import { Container, Title, ButtonsContainer, Button } from "./header.style";

const Header = () => {
  return (
    <Container>
      <Title>Product List</Title>
      <ButtonsContainer>
        <Button>Sort by</Button>
        <Button>Sort by</Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Header;
