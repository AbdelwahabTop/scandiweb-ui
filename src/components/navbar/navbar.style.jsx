import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 5px solid black;
  align-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 2.2em;
  color: black;
  margin-left: 30px;

  @media screen and (max-width: 400px) {
    margin: 15px 12px 12px 12px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 22%;
  margin-right: 30px;

  @media screen and (max-width: 1200px) {
    width: 36%;
  }

  @media screen and (max-width: 900px) {
    width: 50%;
    justify-content: space-around;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 12px 12px 12px;
  }
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
  @media screen and (max-width: 400px) {
    width: 50%;
  }
`;
