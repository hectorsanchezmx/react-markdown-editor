import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Dashboard from '../../controls/Dashboard/Dashboard';
import MarkdownEditor from '../../controls/MarkdownEditor/MarkdownEditor';
import Preview from '../../controls/Preview/Preview';

const styles = theme => ({
});

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      html: '',
    }
  }

  componentDidMount() {

  }

  updatePreview = (html) => {
    this.setState({ html })
  }

  render() {
    const { } = this.props;

    return (
      <Dashboard>
        <main>
          <MarkdownEditor renderHtml={this.updatePreview}/>
          <Preview html={this.state.html} />
        </main>
      </Dashboard>
    )
  }
}

Note.propTypes = {
};

export default Note;
