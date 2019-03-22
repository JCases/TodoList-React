import React, { Component } from 'react';

import { ContentListTodo } from './Style';
import { TodoItem } from '../TodoItem/TodoItem';

export class ListTodo extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ContentListTodo>
                <TodoItem id={1} label="ALGO DE TEXTO PARA VERLO" completed={false} />
            </ContentListTodo>
        );
    }
}