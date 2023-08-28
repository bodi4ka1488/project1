import styled from "styled-components";
export const Item = styled.div`
  width: 120px;
  height: 150px;
`;

export const Foto = styled.img`
  // background-image: url(${(props) => props.foto});
  width: 100%;
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-position: center;
  margin: 0 auto;
  height: 120px;
`;
export const ItemTitle = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;
export const ItemText = styled(ItemTitle)`
  font-weight: 300;
  font-size: 14px;
`;
