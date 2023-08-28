import styled from "styled-components";
export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Info = styled.div`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const ClientItem = styled.div`
  width: 100px;
  font-family: ${(props) => props.inputFamily};
  letter-spacing: ${(props) => props.space};
  font-weight: ${(props) => props.fontWeight};
  font-size: 30px;
`;
