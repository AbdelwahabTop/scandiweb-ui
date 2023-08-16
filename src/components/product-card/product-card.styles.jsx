import styled from "styled-components";

export const Container = styled.div`
  width: 260px;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  //   border-radius: 0.5rem;
  box-shadow: 12px 12px 2px 0px black;
  border: black solid 2px;
  transition: color 0.4s ease, background-color 0.4s ease, border 0.7s ease,
    box-shadow 0.7s ease;

  &:hover {
    color: white;
    background-color: #1e90ff;
    // border: none;
    // box-shadow: 5px 5px 8px 0px #00004d;
  }
`;

export const CheckBox = styled.input`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const Data = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.7rem;
`;
