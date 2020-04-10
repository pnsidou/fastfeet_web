import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto;
  width: 600px;
  background: rgba(0, 0, 0, 0);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      display: flex;
      justify-content: space-between;
      width: 160px;
      button {
        display: flex;
        font-weight: bold;
        justify-content: space-around;
        align-items: center;
        color: white;
        height: 25px;
        border: none;
        border-radius: 2px;
        width: 75px;
        padding-right: 10px;
        padding-left: 5px;
      }
    }
  }
  .save {
    background: #7159c1;
  }

  .back {
    background: #bbb;
  }

  .body {
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-top: 15px;
    border-radius: 3px;
    > div > div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      > div {
        display: flex;
        flex-direction: column;
        margin: 10px 10px;
        input {
          width: 100%;
          color: #aaa;
          padding-left: 8px;
          padding-right: 8px;
          margin-top: 5px;
          border-radius: 2px;
          border: 0.5px solid #bbb;
          height: 25px;
          margin-right: 10px;
        }
      }
    }
  }
`;
