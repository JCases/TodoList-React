import React, { Component } from 'react';

import { ContentPopUp } from './Style';

export class PopUp extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  public render() {
    return (
      <ContentPopUp>

      </ContentPopUp>
    );
  }
}
