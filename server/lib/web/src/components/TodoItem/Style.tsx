import Style from 'styled-components';

import { Button } from '../../shared/styles/Style';

import { Cancel } from 'styled-icons/material/Cancel';
import { Delete } from 'styled-icons/material/Delete';
import { Save } from 'styled-icons/material/Save';

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

export const ButtonDelete = Style(Button)`
  background-color: #000000;
  color:#ffffff;
`;

export const SaveIcon = Style(Save)`
  color: white;
  width: 18px;
`;

export const CancelIcon = Style(Cancel)`
  color: white;
  width: 18px;
`;

export const DeleteIcon = Style(Delete)`
  color: white;
  width: 18px;
`;
