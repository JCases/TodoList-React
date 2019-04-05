import Style from 'styled-components';

import { Link } from 'react-router-dom';

import { Button, Card } from '@material-ui/core';

export const PopUpButton = Style(Button)`
    && {
    height: 2rem;
    width: 6rem;
    margin: 10px;
    }
`;

export const CustomLink = Style(Link)`
    color: white;
    text-decoration: none;
`;
