import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px 0;
  max-width: 550px;
  font-size: 19px;
`;

export const Label = styled.label`
  display: flex;
  width: 150px;
  align-items: center;
  text-transform: capitalize;

  @media screen and (max-width: 400px) {
    margin-bottom: -10px;  
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 290px;
  min-width: 200px;
  font-size: 15px;
  padding: 7px;
  box-shadow: 7px 7px 1px 0px black;
  border-radius: 0.5rem;

  @media screen and (max-width: 400px) {
    width: 87%;
  }
`;
