import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import logo from "./logo.svg";
// import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this["classes"] = props;
  }

  render() {
    return (
      <div className={this.classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={this.classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={this.classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={this.classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={this.classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={this.classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={this.classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={this.classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </div>
    );

    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <div className="logo-container">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <span className="span-plus"> + </span>
    //         <img
    //           src={
    //             "https://s3-us-west-2.amazonaws.com/cyberinfoscripter/AWS_logo_RGB.jpeg"
    //           }
    //           className="App-logo-2"
    //           alt="logo"
    //         />
    //       </div>
    //       <h1 className="App-title">Welcome to React with AWS Cognito</h1>
    //       <p>Use aws sdk safely in frontend with cognito poolid</p>
    //     </header>
    //     <div className="App-intro-container">
    //       <p className="App-intro">
    //         What we are gonna is create a AWS cognito pool ID, please go through
    //         :
    //         <a
    //           href="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials.html"
    //           target="_blank"
    //         >
    //           https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials.html
    //         </a>{" "}
    //         to get an Idea why we are doing this.
    //       </p>
    //     </div>
    //   </div>
    // );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

export default withStyles(styles)(App);
