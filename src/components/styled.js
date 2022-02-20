import styled from "styled-components";
import img from './logo.jpg'


export const MainContainer = styled.div`
    width: 400px;
    height: 500px;
    background-color: #0d0d0d;
    box-shadow: 8px 6px 55px 25px rgba(112, 134, 151, 0.4);
    border-radius: 25px;
    overflow: hidden;
    
   
`

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 160px;
    
`

export const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: white;
    
`

export const DateContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    width: 100%;
    margin-top: 15px;
    
`

export const Datee = styled.div`
    font-size: 14px;
    color: #807e7e;
`

export const DateeBold = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: #807e7e;
`

export const Tasks = styled.div`
    font-size: 12px;
    color: #807e7e;
    
`

export const ClearAll = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 25px;
    background-color: crimson;
    color: white;
    font-size: 14px;
    font-weight: 600;
    border-radius: 8px;
    transition: all 5s ease;
    :active{
        transform: scale(0.97);
    }
    :hover{
        cursor: pointer;
    }
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    margin: 5px 0;
    padding: 0 15px;
    padding-bottom: 10px;
`

export const Input = styled.input`
    width: 260px;
    height: 40px;
    background-color: transparent;
    color: #ededed;
    font-size: 16px;
    padding-left: 10px;
    border: none;
    outline: none;
    
`

export const Add = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    background-color: #35755c;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    transition: all .5s ease;
    :active{
        transform: scale(0.97);
    }
    :hover{
        cursor: pointer;
    }
`

// Table

export const TableContainer = styled.div`
    width: 100%;
    height: 280px;
    box-sizing: border-box;
    padding: 1px 15px;
    overflow-y: auto;
`

export const ItemContainer = styled.div`
    display: flex;  
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    width: 100%;
    height: 50px;
    margin: 15px 0;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    text-transform:capitalize;

`

export const LogoContainer = styled.div`
    width: 100%;
    height: 97%;
    position: relative;
`


export const Empty = styled.img`
    width: 100%;
    height: 95%;
    opacity: 0.02;
    
`

export const LogoTitle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    font-weight: 700;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #807e7e;
    text-transform: capitalize;
`


export const EditInput = styled.input`
    width: 230px;
    height: 30px;
    background-color: transparent;
    font-size: 18px;
    color: white;
    /* border: none; */
    outline: none;
    text-transform: capitalize;
`

export const Clock = styled.span`
    font-size: 7px;
    margin: 0 5px;
`