import styled from 'styled-components';

export const FilterLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
`;

export const FilterInput = styled.input`
    font-size: 18px;
    padding: 8px 16px;
    background-color: transparent;
    border: none;
    border: 1px solid grey;
    border-radius: 8px;
    outline: none;
    color: black;
    transition: 250ms box-shadow ease-in-out;

  &:focus,
  &:active {
    border: 2px solid green;
    box-shadow: rgb(0 0 0 / 15%) 0px 4px 4px -2px;
  }
`;