import React, { Component } from 'react'

 class Todo extends Component {
    constructor(){
        super();
        this.state = {
            tasks:[
                   { task : 'check mails', id:1 }, 
                   { task : 'Make Meal', id:2 }, 
                   { task : 'Breakfast', id:3 }
                  ],
            currtask : ''  
        }
    }

    handleChange = (e) =>{
       this.setState ({
        currtask : e.target.value
       })
    }

    handleSubmit = (e) =>{
        this.setState({
            tasks: [...this.state.tasks,{task : this.state.currtask, id: this.state.tasks.length+1}],
            currtask : ''
        })
    }

    handleDelete = (id) =>{
        let narr = this.state.tasks.filter((taskobj) => {
            return taskobj.id !== id
        })
           this.setState({
             tasks: [...narr]
           })
    }

  render() {
    return (
        <div>
          <input type="text" value={this.state.currtask} onChange={this.handleChange}></input>
           <button onClick={this.handleSubmit}>Submit</button>
           <ul>
           {
             this.state.tasks.map((taskobj) => (
                <li key={taskobj.id}> 
                     <p>{taskobj.task}</p>
                     <button onClick= { () => this.handleDelete(taskobj.id)}>Delete</button>
                </li> 
             ))
           }
           </ul>
        </div>
    )
  }
}


export default Todo;
