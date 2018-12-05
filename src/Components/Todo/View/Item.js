import React from 'react'
import './Item.css'

class ViewItem extends React.Component {
    handleClick(index){
        this.props.deleteItem(index)
    }
    render() {
        return (
            <li key={this.props.index}>
                <span>{this.props.item}</span>
                <button onClick={()=>{this.handleClick(this.props.index)}}>Delete</button>
            </li>
        )
    }
}

export default ViewItem
