import React, { Component } from 'react';
import {connect} from 'react-redux';

 class DisplayList extends Component {
    render() {
        return (this.props.itemsList.map((el,i)=>{
           return (<div key={el.id}>
               {el.item} | <button>x</button>
               

                
            </div>)})
        )
    }
}
const mapStateToProps=state=>{
    return{
        itemsList:state.items
    }
}
export default connect (mapStateToProps)(DisplayList);