import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AddItem from './Components/Todo/Add/Add'
import ViewItem from './Components/Todo/View/Item'




class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }
    handleClick(value) {
        let items = this.state.items.slice()
        items.push(value)
        this.setState({
            items: items
        })
    }
    deleteItem(index) {
        let items = this.state.items.slice()
        items.splice(index,1)
        this.setState({
            items: items
        })
    }
    ItemList() {
        const itemList = this.state.items.map((item, index) => {
            return <ViewItem
                deleteItem={(index)=>{this.deleteItem(index)}}
                index={index}
                item={item}
            />
        })
        return itemList
    }
    render() {
        return (
            <div>
                <AddItem
                    clicked={(value) => this.handleClick(value)} />
                <ol>
                    {this.ItemList()}
                </ol>

            </div>

        )
    }
}

ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
)