import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Dashboard from '../../controls/Dashboard/Dashboard';

const styles = theme => ({
});

class Posts extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render() {
    const { } = this.props;

    return (
      <Dashboard>
        <main>
          <div className="calendar">
           
          </div>
        </main>
      </Dashboard>
    )
  }
}

Posts.propTypes = {
};

export default withStyles(styles)(Posts);
