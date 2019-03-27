import Style from 'styled-components';

export const ContentTodoItem = Style.div`
  padding: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid rgba(38, 50, 56, .4);
`;

export const StructureTodoItem = Style.div`
  padding: 10px;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 15px;
`;

export const Text = Style.span`
  font-size: 14px;
  padding-right: 4vw;
`;

export const Checkbox = Style.input`
  padding-left: 4vw;
`;
