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
`;
