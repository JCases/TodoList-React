import Style from 'styled-components';

import { Button } from '../../shared/styles/Style';

export const ContentMain = Style.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #FFFFFF;
    height: 60vh;
    width: 40vw;
`;

export const PopUpButton = Style(Button)`
    height: 2rem;
    width: 6rem;
`;
