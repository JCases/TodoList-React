import React, { Component } from 'react';

import { ContentMain } from './Style';
import { Button } from '../../shared/styles/Style';

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
                <Button> BUTTON </Button>
                <ListTodo />
            </ContentMain>
        );
    }
}