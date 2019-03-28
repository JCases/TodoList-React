import Style from 'styled-components';

import { Button } from '../../shared/styles/Style';

export const ContentMain = Style.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #FFFFFF;
    overflow-y: auto;
    height: 60vh;
    width: 40vw;

    ::-webkit-scrollbar {
        width: 2px;
        background-color: #263238;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #212121;
    }
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }
`;

export const PopUpButton = Style(Button)`
    height: 2rem;
    width: 6rem;
`;
