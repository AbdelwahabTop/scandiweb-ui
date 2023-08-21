import styled from "styled-components";

export const BaseButton = styled.button`
  background-color: white;
  color: black;
  border-color: black;
  width: 130px;
  height: 40px;
  box-shadow: 5px 5px 1px 0px black;
  font-size: 14px;
  transition: color 0.7s ease, background-color 0.7s ease, border 0.7s ease,
    box-shadow 0.7s ease;
  border-radius: 0.5rem;
`;

export const AddProductButton = styled(BaseButton)`
  color: #1e90ff;
  width: 110px;

  &:hover {
    color: white;
    background-color: #1e90ff;
    border: none;
    box-shadow: 5px 5px 8px 0px #00004d;
  }

  @media screen and (max-width: 1200px) {
    width: 150px;
  }

  @media screen and (max-width: 900px) {
    width: 110px;
  }

  @media screen and (max-width: 400px) {
    width: 115px;
  }
`;

export const MassDeleteButton = styled(BaseButton)`
  color: #ff4c4c;
  width: 170px;

  &:hover {
    color: white;
    background-color: #ff4c4c;
    border: none;
    box-shadow: 5px 5px 8px 0px #990000;
  }

  @media screen and (max-width: 1200px) {
    width: 150px;
  }

  @media screen and (max-width: 900px) {
    width: 120px;
  }

  @media screen and (max-width: 400px) {
    width: 120px;
  }
`;

export const SaveButton = styled(BaseButton)`
  color: #03c03c;
  width: 140px;

  &:hover {
    color: white;
    background-color: #03c03c;
    border: none;
    box-shadow: 5px 5px 8px 0px #004225;
  }

  @media screen and (max-width: 900px) {
    width: 130px;
  }

  @media screen and (max-width: 400px) {
    width: 115px;
  }
`;

export const CancelButton = styled(BaseButton)`
  color: #8b8878;
  width: 140px;

  &:hover {
    color: white;
    background-color: #8b8878;
    border: none;
    box-shadow: 5px 5px 8px 0px black;
  }

  @media screen and (max-width: 900px) {
    width: 130px;
  }

  @media screen and (max-width: 400px) {
    width: 115px;
  }
`;
