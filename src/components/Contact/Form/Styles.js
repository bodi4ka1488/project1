import styled from "styled-components";
export const FormWrapper = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Fio = styled.div`
  display: flex;
  gap: 20px;
`;

export const Labela = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 20px;
`;
export const NewInput = styled.input`
  margin-bottom: 20px;
  font-size: 16px;
  padding: 7px;
  outline: none;
  background-color: rgba(var(--bgh, 255, 255, 255), var(--alpha-bgh, 1));
  border-color: rgba(var(--brdh, 163, 217, 246), var(--alpha-brdh, 1));
  border-style: solid;
  border-width: var(--brwh, 1px);
`;
