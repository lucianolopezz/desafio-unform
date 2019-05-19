import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 450px;
  background-color: #FFF;
  border-radius: 5px;
  overflow-y: scroll;

  table {
    width: 100%;
    color: #777777;
    font-size: 14px;

    table,thead,tbody,tr,th,td {
      text-align: center;
      margin: auto;
      padding: 10px;
      border:1px solid #f3f3f3;
    }

    td {
      font-size: 12px;
    }

  }
`;

export const Link = styled.a`
  padding-left: 3px;
`;
