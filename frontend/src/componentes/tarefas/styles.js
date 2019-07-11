import styled from 'styled-components'
import { Link } from 'react-router-dom';






 export const Title = styled.h1`
    font-size: 48px;
    text-align: center;
    background :#333;
    border-bottom:5px solid #4faddb;
    height:80px;
    box-sizing: content-box;
    color: #ffffff;
    border-radius: 6px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    `;

export const Wrapper = styled.section`
 
    font-size:23px;
    background: ghostwhite;
    box-sizing: border-box;
    margin: 16px;
    font-family: 'Overpass', sans-serif;
    padding:16px;
       
        table{
            margin-top:30px;
            text-align:center;
            position: absolute;
            top: 300px;
            left: 550px;
        }
        th{
            padding: 10px;
            border:solid 5px #2222;
            
        }
        td{
            padding: 10px;
            border:solid 3px #2323;
            
        }label{
            padding: 16px;
            
            
        }
       
        input{
            margin-bottom: 16px;
            width:220px;
            height: 32px;
            border: 1px solid #e4c8c8;
            border-radius: 6px;
            padding-left: 20px;
            background-color:lightgray;
            margin-left:5px

        }div{
            position: center;
            padding-left: auto;
            display : auto
        }
       
      
    `;

    
export const StyledLink = styled(Link)`
   font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   text-decoration: none;
   color:#4faddb;
   font-size:1.3em;
   padding: 10px;
   position:relative;
   display: block;
   
`;

export const Button = styled.button`
        background: #0099FF;
        border: 2px solid #0099FF;
        border-radius: 25px;
        padding:10px 30px;
        font-size: 28px;
        margin: 1rem;
        padding: 1rem 1.5rem;
        box-shadow:2px 2px 1px 1px #000;
        display: inline-block;
        height:32px;
        width:auto;
        padding: 0 16px;
        color: #fff;
        cursor: pointer;
        
`;







