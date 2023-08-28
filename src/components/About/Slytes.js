import styled from 'styled-components';
export const Wrapper = styled.div`
    width:100%;
    height: max-content;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
`
export const Content = styled.div`
    width:350px;    
    flex-direction: column;
    display: flex;
    gap:20px

`
export const Info = styled.div`
    color: blue;
    margin: 70px 0 0 0;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
`
export const Title = styled.div`
    font-weight: 600;
    font-size: 36px;
    margin: 0 auto;
`
export const Text = styled.div`
font-size:18px;
line-height:28px;
`