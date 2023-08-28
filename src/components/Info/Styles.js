import styled from 'styled-components';

export const Wrapper =  styled.div`
    width:100%;
    height:400px;
    background-color:#23234d;
`
export const Title = styled.div`
padding-top:50px;
height:100px;
font-size:40px;
font-weight:600;
color:white;
text-align:center;
`
export const Content = styled.div`
    width:80%
    height:300px;
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    gap:70px
`
export const CircleItem = styled.div`
    width:10px;
    height:10px;
    border-radius:10px;
    background-color:white;
`