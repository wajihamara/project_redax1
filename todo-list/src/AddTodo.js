import React, { Component } from 'react'
import{addToList} from './actions/action';
import {connect} from 'react-redux'

 class AddTodo extends Component {
    constructor(){
        super()
        this.state={
            userInput:''
        }
    }
    handleChange=(event)=>{
        this.setState({
            userInput:event.target.value
        });

    }
    render(){
        return(
            <form>
            <input type="text"
             placeholder="Ajouter un item"
             value={this.state.userInput}
             onChange={this.handleChange} />
             <button onClick={(event)=>
             event.preventDefault(),
             this.props.handleAdd(this.state.userInput),
             this.setState({userInput:""})}>
             
             Ajouter</button>
             </form>
             )
        }
}
const mapDispatchToProps=dispatch=>{
    return {
        handleAdd:(newArticle)=>{dispatch(addToList(newArticle))}
    }
}
export default connect (null,mapDispatchToProps)(AddTodo);