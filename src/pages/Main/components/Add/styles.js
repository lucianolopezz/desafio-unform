import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFF;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  max-width: 400px;

  Form {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      font-size: 10px;
      color: red;
      padding-left: 2px;
    }

    Input, Select {
    height: 48px;
    border-radius: 5px;
    border: 1px solid #f3f3f3;
    margin-top: 10px;
    text-indent: 10px;

    ::placeholder { /* Firefox, Chrome, Opera */
      color: #CCC;
    }
  }

  button {
    margin-top: 10px;
    height: 48px;
    background-color: #47e87c;
    border: none;
    color: #FFf;
    font-weight: bold;
    border-radius: 5px;

    cursor: pointer;
    &:hover {
      background-color: #4cdb7b;
    }
  }

  }
`;
export const Title = styled.h3`
  color: #777777;
  text-align: center;
`;
