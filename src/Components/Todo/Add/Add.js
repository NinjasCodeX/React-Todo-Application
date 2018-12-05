import React from 'react'
import './Add.css'

class AddItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange(event) {
        
        const currentvalue = event.target.value
        this.setState({
            value: currentvalue
        })
    }

    handleClick(value) {
        if (!value) return;
        this.props.clicked(value)
        this.setState({ value: '' })
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    className='todo-input'
                    placeholder='Enter Todo item'
                    value={this.state.value}
                    onChange={(event) => { this.handleChange(event) }} />
                <button
                    onClick={() => { this.handleClick(this.state.value) }}
                    className='btn-save'> Add Todo
            </button>
            </div>
        )
    }
}


export default AddItem