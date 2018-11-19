import React from 'react';
import { Markup } from 'interweave';
import './Preview.scss';

class Preview extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="preview">
        <Markup content={this.props.html} />
      </div>
    );
  }
}

export default Preview;
