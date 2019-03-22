import React, { Component } from 'react';

import { ContentMain, PopUpButton } from './Style';

import { ListTodo } from '../ListTodo/ListTodo';

export class Main extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            test: 'test',
        }
    }

    render() {
        return (
            <ContentMain>
                <PopUpButton> BUTTON </PopUpButton>
                <ListTodo />
            </ContentMain>
        );
    }
}