import styled from "styled-components";
export const Wrapper = styled.div`
  width: 70%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
`;
export const Title = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 55px;
  margin: 0 auto;
`;
export const Name = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin: 0 auto;
`;
export const CompanyName = styled(Name)`
  font-weight: 400;
`;
