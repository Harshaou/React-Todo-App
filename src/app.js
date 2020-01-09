import React from 'react'
import ListItems from './components/ListItems'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

class App extends React.Component{

    state ={
        items: [],
        currentItem: {
            text: '',
            key: ''

        }
    }

    handleChange = (event) => {
        this.setState({currentItem:{
            text: event.target.value,
            key: Date.now()
        }})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newItem  = this.state.currentItem
        console.log(this.state.currentItem);
        if (newItem !== '') {
        const newItems = [...this.state.items, newItem]
        this.setState({items: newItems, currentItem:{
            text: this.state.currentItem.text,
            key: this.state.currentItem.key
        }})
        }
    }

    deleteItem = (key) => {
       const filteredItem = this.state.items.filter((item)  =>       
           item.key !== key)
           this.setState({items: filteredItem})
           
           
    }


    render() {
        return (
        <div className="container">
        <div className="app">
        <header>
        <h1>TODO-APP</h1>
        <form id="to-do-form" onSubmit={this.handleSubmit}>
           <input onChange={this.handleChange} type="text"
           placeholder="type here" id="input" value={this.state.currentItem.text} />
           <button  type="submit">Add</button>
        </form>
        </header>
        <ListItems items = {this.state.items} currentItem={this.state.currentItem}
        deleteItem ={this.deleteItem} />
        </div>
        </div>
        )
    }
}

export default App



        
        
        
      