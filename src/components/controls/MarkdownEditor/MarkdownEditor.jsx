import React, {Fragment} from 'react';
import * as Showdown from "showdown";
import './MarkdownEditor.scss';

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true
    });
  }

  handleType = (event) => {
    const markdown = event.target.innerText;
    const html = this.converter.makeHtml(markdown)
    this.setState({ markdown });
    this.props.renderHtml(html);
  };

  render() {
    return (
      <Fragment>
        <div className="editor"
          contentEditable
          onInput={this.handleType}
        />
      </Fragment>
    );
  }
}

export default MarkdownEditor;
