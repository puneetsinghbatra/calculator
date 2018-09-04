/*************
 Calculator Component
***************/
import React, { Component } from 'react';
export default class Calculator extends Component
{

	/****** Adding values*******/
    state ={
          result:0,
          _:0,
          current:0 

     }

 constructor(props)
     {
         super(props);
        this.evaluatedata          = this.evaluatedata.bind(this);
        this.validkey              = this.validkey.bind(this);
        this.addvalueorsymbols     = this.addvalueorsymbols.bind(this);
     } 


 validkey(e)
  {
    var reg = new  RegExp('^[0-9+*\-/._]$');
    if(reg.test(e.key))
    {
       return true;
      
    }
    return false;  
   
  }


 /***** evaluate result*****/    
 evaluatedata(event)
 {
         
     	 console.log("It is the valid key");
     	 if(event.key=='=' || event.key=='enter')
     	 {
              let reformval = eval(event.target.textContent);  
              this.setState({_:reformval,current:reformval}); 

     	 } 

 }

 addvalueorsymbols(e)
 {
      if(e.target.textContent=='=' || e.target.textContent)
      {
         let reformval = eval(e.target.textContent); 
         this.setState({_:reformval,current:reformval});   
      }
      else
      {
      	this.setState({current:this.state.current+e.target.textContent});
      }
         
 }

   render()
   {
      return(<div id="calculator" role="application">
					<div className="top">
						<div className="screen" aria-labelledby="displayScreen" onKeyPress={this.validkey} onKeyDown={this.evaluatedata}   contentEditable="true">{this.state.current}</div>
					</div>
					
					<div className="keys" aria-labelledby="inputKeys">
						<span tabIndex="0" onClick={this.addvalueorsymbols}>7</span>
						<span tabIndex="0" onClick={this.addvalueorsymbols}>8</span>
						<span tabIndex="0" onClick={this.addvalueorsymbols}>9</span>
						<span tabIndex="0" onClick={this.addvalueorsymbols} className="operator">+</span>
						<span tabIndex="0" onClick={this.addvalueorsymbols}>4</span>
						<span tabIndex="0" onClick={this.addvalueorsymbols}>5</span>
						<span tabIndex="0" onClick={this.addvalueorsymbols}>6</span>
						<span tabIndex="0" onClick={this.addvalueorsymbols} className="operator">-</span>
						<span tabIndex="0" onClick={this.addvalueorsymbols} >1</span>
						<span tabIndex="0" onClick={this.addvalueorsymbols}>2</span>
						<span tabIndex="0" onClick={this.addvalueorsymbols}>3</span>
				  	    <span tabIndex="0"  className="operator">x</span>
						<span tabIndex="0" onClick={this.addvalueorsymbols}>0</span>
						<span tabIndex="0" onClick={this.addvalueorsymbols} className="operator">÷</span>
				       <span tabIndex="0"  onClick={this.addvalueorsymbols} className="eval">=</span>
				   
					</div> 
				</div>);
   }

	



}
