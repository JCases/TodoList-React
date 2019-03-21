import React, { Component } from 'react';

import { ListTodo } from './ListTodo';

export class Main extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            test: 'test',
        }
    }

    render() {
        return (
            <main className="Main">
                <button> PENE </button>
                <ListTodo />
            </main>
        );
    }
}