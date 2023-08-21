import styled from "styled-components";

export const Container = styled.div`
  margin-lift: 30px;
  width: 100%;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-top: 60px;
  margin-left: 10px;
  width: 100%;
  min-height: 380px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 20px;
  }
`;

export const Notification = styled.div`
  width: 450px;
  color: red;
  fontweight: "bold";
  font-size: 30px;
  transition: opacity 0.3s ease;
  height: 5px;
  text-align: center;
  margin: 15px auto;

  @media screen and (max-width: 400px) {
    display: none;
  }
`;
