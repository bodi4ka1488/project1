import styled from "styled-components";
export const Wrapper = styled.div`
  background-image: url(https://krot.info/uploads/posts/2021-01/1611843982_26-p-fon-bolshaya-kletka-28.jpg);
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  opacity: 0.97;
`;
export const ContactSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const Info = styled.div`
  color: blue;
  margin: 70px 0 0 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 24px;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
`;
export const Text = styled.div`
  font-size: 18px;
  line-height: 28px;
`;
export const LinkWrapper = styled.div`
  color: black;
  font-size: 22px;
  display: flex;
  gap: 20px;
`;
