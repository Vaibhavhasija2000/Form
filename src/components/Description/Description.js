import React,{Component } from 'react';
import classes from './Description.css';
import autosize from 'autosize';
class Description extends Component{
    componentDidMount(){
        this.textarea.focus();
        autosize(this.textarea);
     }
     

    render(){
        const style = {
            maxHeight:'75px',
            minHeight:'38px',
              resize:'none',
              padding:'9px',
              boxSizing:'border-box',
              fontSize:'15px'};

        return(
            <div className={classes.Container} style={{margin: 'auto'}}>
                
                <textarea style={style} 
                 style={style} 
                 ref={c=>this.textarea=c}
                 placeholder="Untitled Form"
                 rows={1} defaultValue="" 
                 className={classes.textarea1}>
                   
                </textarea>
                <textarea style={style} 
                 style={style} 
                 ref={c=>this.textarea=c}
                 placeholder="Untitled Description"
                 rows={1} defaultValue="" 
                 className={classes.textarea2}>
                   
                </textarea>
            </div>
        );
    }

}

export default Description;