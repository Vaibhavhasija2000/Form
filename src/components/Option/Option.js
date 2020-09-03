import React,{Component} from 'react';
import classes from './Option.css';
class Option extends Component{
    render(){
        let optionValue=null;
        switch(this.props.optionType){
            case('checkbox'):
              optionValue=<input type='checkbox' {...this.props} />;
              default: optionValue=<input type='radio' {...this.props} />;
        }
        return(
            <div className={classes.Container}>
                {optionValue}
            </div>
        );
    }
}
export default Option;