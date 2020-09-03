import React, {Component } from 'react';

import Form from './Form/Form';
import Layout from '../Layout/Layout';
import classes from './App.css';
class App extends Component {
  
  
  render() {
    return(
    <div className={classes.App}>
     <Form>
       {/* <Layout /> */}
     </Form>
     
     
    </div>
    );
  }
}
export default App;