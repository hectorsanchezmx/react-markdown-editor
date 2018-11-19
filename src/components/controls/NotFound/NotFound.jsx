import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import notFoundImg from './NotFound.jpg'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  image: {
    top: '23vh',
    position: 'absolute',
    right: 0,
  }
});

const NotFound = (props) => {
  const { classes } = props;
  return (
    <div>
      <h1>Whoops</h1>
      <h2>La página que estás buscando no existe</h2>
      <p>Regresa al <a href="">Dashboard</a></p>
      <img src={notFoundImg} alt="Page not found" className={classes.image} />
    </div>
  );
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);
