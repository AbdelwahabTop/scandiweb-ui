import styled from "styled-components";

export const BaseButton = styled.button`
  background-color: white;
  color: black;
  border-color: black;
  width: 130px;
  height: 40px;
  box-shadow: 5px 5px 2px 0px black;
  font-size: 14px;
  transition: color 0.7s ease, background-color 0.7s ease, border 0.7s ease,
    box-shadow 0.7s ease;
`;

export const AddProductButton = styled(BaseButton)`
  color: #1e90ff;

  &:hover {
    color: white;
    background-color: #1e90ff;
    border: none;
    box-shadow: 5px 5px 8px 0px #00004d;
  }
`;

export const MassDeleteButton = styled(BaseButton)`
  color: #ff4c4c;
  width: 150px;

  &:hover {
    color: white;
    background-color: #ff4c4c;
    border: none;
    box-shadow: 5px 5px 8px 0px #990000;
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
`;
