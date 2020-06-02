import React from 'react';

export default class AddBook extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
        }
    }
     inputHandler =  (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render () {
        let val = this.state.value;
        return(
            
            <form id = 'new-book-form' onSubmit = {this.props.addBook.bind(this,val)}>
                 <input type = 'text' name='newBook' value = {this.state.value} onChange = {this.inputHandler} placeholder = "Start typing book's title..."/>
                 <input type = 'submit' name='newBook' value = 'Add'/>
            </form>
           
    
        )
    }
  
}