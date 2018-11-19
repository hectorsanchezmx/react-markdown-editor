import React, {Fragment} from 'react';
import * as Showdown from "showdown";
import shallowCompare from 'react-addons-shallow-compare'; // ES6
import './MarkdownEditor.scss';

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: ''
    }
    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true
    });
  }

  componentDidMount() {
    console.log('rerendered')
    document.getElementById('editor').innerHTML = this.props.markdown;
    const markdown = this.props.markdown;
    this.setState({ markdown })
    const html = this.converter.makeHtml(markdown)
    this.props.renderHtml(markdown, html);
  }

  handleType = (event) => {
    event.target.selectionEnd = 0
    const markdown = event.target.innerText;
    this.setState({markdown})
    const html = this.converter.makeHtml(markdown)
    this.props.renderHtml(markdown, html);
  };

  render() {
    return (
      <Fragment>
        <div className="editor"
          id="editor"
          contentEditable
          onInput={this.handleType}
          value={this.state.markdown}
        >
        </div>
      </Fragment>
    );
  }
}

export default MarkdownEditor;
