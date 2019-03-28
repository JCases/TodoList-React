import Style from 'styled-components';

import { Button } from '../../shared/styles/Style';

export const ContentTodoItem = Style.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid rgba(38, 50, 56, .4);
`;

export const StructureTodoItem = Style.div`
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
`;

export const Text = Style.span`
  font-size: 14px;
  padding-right: 4vw;
`;

export const Checkbox = Style.input`
  padding-left: 4vw;
`;

export const ButtonSave = Style(Button)`
  background-color: #00C853;
  color:#ffffff;
`;

export const ButtonCancel = Style(Button)`
  background-color: #D50000;
  color:#ffffff;
`;

export const TextInput = Style.input`
  margin-left: 2vw;

  @media (max-width: 600px) {
    width: 100px;
  }

  @media (max-width: 460px) {
    width: 60px;
  }

  @media (max-width: 400px) {
    width: 40px;
  }
`;
