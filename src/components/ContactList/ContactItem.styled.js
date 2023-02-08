import styled from 'styled-components';

export const ContactItemButton = styled.button`
padding: 10px 70px;
max-width: 300px;
font-weight: 600;
font-size: 14px;
border-radius: 5px;
border-style: hidden;
background-color: red;
color: #ffffff;
cursor: pointer;
  
:hover {
    background-color: white;
    color: black;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgb(0 0 0 / 20%) 0px 10px 10px -5px;
}
:active {
    box-shadow: rgb(0 0 0 / 30%) 0px 10px 10px -2px;
}
`;


export const UserContactItem = styled.li`
  width: 500px;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 4px -2px;
  
  :hover,
  :focus {
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: rgb(0 0 0 / 10%) 0px 10px 10px -2px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const UserContactList = styled.li`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
`;
