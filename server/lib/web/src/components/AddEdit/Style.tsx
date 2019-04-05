import Style from 'styled-components';

import { Button } from '@material-ui/core';

export const ContentAddEdit = Style.div`
    background-color: white;
    width: 50vw;
    height: 14vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: 10px;
`;

export const ContentInfo = Style.div`
    align-items: center;
    display: flex;
`;

export const Checkbox = Style.input`
  margin-left: 2vw;
`;

export const ButtonAdd = Style(Button)`
    && {
      margin: 10px;

      @media (max-height: 450px) {
        height: 40px;
        font-size: 8px;
      }
    }
`;
