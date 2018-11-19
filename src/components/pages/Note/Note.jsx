import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Dashboard from '../../controls/Dashboard/Dashboard';
import MarkdownEditor from '../../controls/MarkdownEditor/MarkdownEditor';
import Preview from '../../controls/Preview/Preview';
import Notes from '../../controls/Notes/Notes';

const styles = theme => ({
});

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: '',
      html: '',
      noteTitle: '',
      noteContent: '',
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  addNote = () => {
    this.props.addNote({title: moment().format('YYYY-MM-DD'), content:'# This is the title'})
  }

  updatePreview = (markdown, html) => {
    this.setState({ markdown, html })
  }

  openNote = (id) => {
    this.setState({
      loading: true,
      noteTitle: '',
      markdown: '',
      html: '',
    })
    const notes = this.props.notes;
    const filteredNotes = Object.keys(notes).filter((key, index)=>{
      return key === id;
    })
    const noteId = filteredNotes[0]
    const note = notes[noteId];
    note.id = noteId;
    this.setState({ 
      noteTitle: note.title,
      markdown: note.content,
    })
    this.props.setNote(note)
    setTimeout(() => { 
      this.setState({ 
        loading: false,
      })
    }, 100);
  }

  updateNote = () => {
    const id = this.props.note.id;
    const note = {
      title: this.state.noteTitle,
      content: this.state.markdown
    }
    this.props.updateNote(id, note)
  }

  render() {
    const { notes, note } = this.props;
    console.log('this.state', this.state)
    return (
      <Dashboard>
        <button className="new" onClick={this.addNote}>Add new</button>
        <Notes 
          notes={ notes }
          openNote={ this.openNote }
          />
        <main>
          { !this.state.loading &&
            <Fragment>
              <button className="update" onClick={this.updateNote}>Update</button>
              <MarkdownEditor renderHtml={this.updatePreview} markdown={this.state.markdown} loading={this.state.loading}/>
              <Preview html={this.state.html} />
            </Fragment>
          }
        </main>
      </Dashboard>
    )
  }
}

Note.propTypes = {
};

export default Note;
