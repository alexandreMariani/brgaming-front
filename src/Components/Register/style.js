import styled from "styled-components";


export const StyledBody = styled.div`
  height: 100vh;
  background-color: #bbb;
  background-size: cover;

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  h5 {
    color: #380f52;
    margin: 12px 0;
  }

  span {
    color: #0ec977;
    cursor: pointer;
  }
`;

export const RegisterFormContainer = styled.div`
  min-width: 80vw;
  height: 100vh;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    min-width: 300px;
  }
`;

export const Header = styled.div`
  font-size: 32px;
  color: white;
  font-weight: bold;
  justify-content: center;
  display: flex;
  padding-bottom: 20px;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: red;
    height: 12px;
    font-size: 12px;
    margin: 6px;
  }
`;

export const TextInput = styled.div`
  font-size: 1rem;
  margin: 1px 4px;
  width: 100%;
  text-align: center;
  color: ${(props) => (props.error ? "red" : "white")};
`;

export const Input = styled.input`
  width: 80%;
  height: 32px;
  border-radius: 16px;
  padding-left: 1.5rem;
  color: #380f52;
  border: 1px solid;
  border-color: ${(props) => (props.error ? "red" : "white")};
`;

export const RegisterButton = styled.button`
  padding: 6px 16px;
  max-width: 40vw;
`;

export const StyledText = styled.div`
  color: #fff;
`;
