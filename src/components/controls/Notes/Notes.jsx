import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Notes.scss';

class Notes extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render() {
    const { notes, openNote } = this.props;

    return (
      <Fragment>
        <div className="notes">
          {Object.keys(notes).map((key, index)=>(
            <div className="note" id={key} onClick={()=>openNote(key) }>
              <p>{notes[key].title}</p>
            </div>
          ))}
        </div>
      </Fragment>
    )
  }
}

Notes.PropTypes = {

};

export default Notes;
