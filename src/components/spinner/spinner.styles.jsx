import styled from "styled-components";

export const SpinnerOverlay = styled.div`
  height: 70vh;
  width: 430%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 8px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 400px) {
    display: none;
  }
`;
