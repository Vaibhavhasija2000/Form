import React, { Component } from 'react';

import classes from './Starting.css';
import Description from '../Description/Description';
import FormHolder from '../../containers/FormHolder/FormHolder';
//import OptionOutlook from '../OptionOutlook/OptionOutlook';
class Starting extends Component{

    state={
        showInput:false,
        
        num:1
    }

    openDescriptionHandler = () => {
        this.setState({showInput:true});


    }
    // selectOptionHandler =() => {
    //     this.setState({num : num+1});
    // }
    

   
    render(){
        let a = null;
        if(!this.state.showInput){
            a=(
                <div>
                <p className={classes.Starting} >
                    FORMS
                    </p>
                    <li className={classes.list}>
                        <ul>Make forms</ul>
                        <ul>Make quizess</ul>
                        <ul>Add photos and videos to your form</ul>
                        <ul>..And Much More</ul>
                    </li>
                
                
                <button onClick = {this.openDescriptionHandler} className={classes.Button}>
                    CREATE A FORM
                   </button>
                   </div>
            );
        }else{
            a=(
                <div>
                    <FormHolder />
                <Description /> 


                
                </div>
            );
        }
      
        return(
            <div  >
            {a}
           
               
            </div> 
        );
            }
        }



export default Starting;