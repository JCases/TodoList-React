import React, { Component } from 'react';

export class Header extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            test: 'test',
        }
    }

    render() {
        return (
            <div className="Header">
                <h1>TodoList</h1>
            </div>
            
        );
    }
}