import Style from 'styled-components';

export const ContentPopUp = Style.div`
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
