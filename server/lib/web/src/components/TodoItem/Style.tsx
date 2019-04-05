import Style from 'styled-components';

import { Fab } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

import { Cancel } from 'styled-icons/material/Cancel';
import { Delete } from 'styled-icons/material/Delete';
import { Save } from 'styled-icons/material/Save';

import { green, red, blueGrey } from '@material-ui/core/colors';

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

export const ButtonsActions = Style(Fab)`
  && {
    width: 40px;
    height: 40px;
    margin-left: 4px;
    margin-right: 4px;
  }
`;

export const ThemeSave = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

export const ThemeDelete = createMuiTheme({
  palette: {
    primary: blueGrey,
  },
  typography: {
    useNextVariants: true,
  },
});

export const ThemeCancel = createMuiTheme({
  palette: {
    primary: red,
  },
  typography: {
    useNextVariants: true,
  },
});

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
