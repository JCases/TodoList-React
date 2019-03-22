import React, { Component } from 'react';

import { ContentTodoItem } from './Style';

import { ITodoItem } from '../../../../shared/interfaces/index';

export class TodoItem extends Component<ITodoItem, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            label: this.props.label,
            completed: this.props.completed,
        }
    }

    render() {
        return (
            <ContentTodoItem>
                <input type="checkbox" name="completed" checked={this.state.completed} onChange={(event) => this._onChange(event)}></input>
                <text>{this.state.label}</text>
            </ContentTodoItem>
        );
    }

    private _onChange(event: any) {
        this.setState({
            completed: !this.state.completed, 
        });
    }
}