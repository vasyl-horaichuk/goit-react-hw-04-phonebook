import styled from 'styled-components';

export const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 50px;
`;

export const FormLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;


export const FormInput = styled.input`
  font-size: 18px;
  padding: 4px 2px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid grey;
  border-radius: 0px;
  outline: none;
  color: black;
  transition: 250ms box-shadow ease-in-out;
  &:focus,
  &:active {
    border-bottom: 2px solid green;
    box-shadow: rgb(0 0 0 / 15%) 0px 4px 4px -2px;
  }
`;


export const FormButton = styled.button`
padding: 13px 70px;
min-width: 300px;
font-weight: 600;
font-size: 14px;
border-radius: 5px;
border-style: hidden;
background-color: green;
color: #ffffff;
cursor: pointer;
  
:hover,
:focus {
    background-color: white;
    color: black;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgb(0 0 0 / 20%) 0px 10px 10px -5px;
}
:active {
    box-shadow: rgb(0 0 0 / 30%) 0px 10px 10px -2px;
}
`;