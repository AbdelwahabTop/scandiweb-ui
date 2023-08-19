import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 5px solid black;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.2em;
  color: black;
  margin-left: 30px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 22%;
  margin-right: 30px;
`;

export const Button = styled.button`
  background-color: white;
  color: black;
  border-color: black;
  width: 120px;
  height: 40px;
  box-shadow: 5px 5px 2px 0px black;
`;

export const Notification = styled.div`
  width: 450px;
  color: red;
  fontweight: "bold";
  font-size: 30px;
  transition: opacity 0.3s ease;
`;
