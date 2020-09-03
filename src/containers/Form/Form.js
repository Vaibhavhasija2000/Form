import React,{Component} from 'react';

import classes from './Form.css';
import Starting from '../../components/Starting/Starting';
class Form extends Component{

    render(){
        return(
        <div className={classes.Form}>
         <p>Toolbar SideDRawer LOgo</p>

         <Starting />
         
        </div>
        );
    }

}

export default Form;