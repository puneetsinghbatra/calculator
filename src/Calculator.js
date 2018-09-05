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
          current:'' 

     }

 constructor(props)
     {
         super(props);
        this.evaluatedata          = this.evaluatedata.bind(this);
        this.validkey              = this.validkey.bind(this);
        this.addvalueorsymbols     = this.addvalueorsymbols.bind(this);
     } 


 validkey(key)
  {
  
    var reg = new  RegExp('^[0-9+*\-/._]$');
    if(reg.test(key)) 
    {
       return true;
      
    }
     return false
  }


 /***** evaluate result*****/    
 evaluatedata(event)
 {

 	    if(!this.validkey(event.key))
 	    {
 	    	 console.log(event.key);
             event.preventDefault(); 

 	    }
          
     	 if(event.key=='=' || event.key=='Enter' || event.key=='enter')   
     	 {
     	 	   event.preventDefault();
     	 	  let textcontent  = this.replaceUnderScore(event.target.textContent,'_');
            

              let reformval    = eval(textcontent); 
              /*****Checkif result  comes infinity****/
              if(reformval=='Infinity')
              {
                    console.log('result comes in infinity cannot be considered');
                    this.setState({_:0,current:0}); 
              }
              else
              {
                  this.setState({_:reformval,current:reformval}); 

              }
              

     	 }  
 }
 
 addvalueorsymbols(e)
 {
 	   
      if(e.target.textContent=='=' )
      {
      	  e.preventDefault();
         let reformval = eval(this.state.current); 
         this.setState({_:0,current:reformval});   
      }
      else if(e.target.textContent=='_')
      {
          
      	this.setState({current:this.replaceUnderScore(this.state.current+e.target.textContent,'_')});

      }
      else
      { 
        
      	this.setState({current:this.state.current+e.target.textContent});
      }
         
 }

 replaceUnderScore(textContent,symbol)
 {
   
    return textContent.replace(symbol, this.state._);
 }



   render()
   {
      return(<div id="calculator" role="application">
					<div className="top" >
						<div className="screen" suppressContentEditableWarning={true} aria-labelledby="displayScreen" onKeyDown={this.evaluatedata}   contentEditable="true">{this.state.current}</div>
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
