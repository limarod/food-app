import {styled} from "styled-components"

export const Container = styled.div`
  
  width: 100%;
  border-radius: 0.6rem;
  margin: 1.2rem 0 2.4rem 0;

  background-color: ${({theme}) => theme.COLORS.SecondBackground};

  display: flex;
  align-items: center;

  >svg{
    margin-left: 1rem;
    font-size: 1.4rem;
    color: white;
  }

  input{
    width: 100%;
    font-size: 1.2rem;
    border: none;
    border-radius: 0.6rem;

    padding: 1.2rem 0 1.2rem 1.4rem;


    background-color: ${({theme}) => theme.COLORS.SecondBackground};
    color: white;

    &::placeholder{
      /* color:white; */
    }
  }


` 