import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
});

class Dashboard extends React.Component {

  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, children, title } = this.props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child));

    return (
      <div className={classes.root}>
        {childrenWithProps}
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
