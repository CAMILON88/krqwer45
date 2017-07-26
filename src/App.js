import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    

    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: '',
      count: 4,

      
    
    }
  }
  

 
  textChange(event) {
    this.setState({
      newTask: event.target.value
    })
  }

 
  addItem(event)
  {
     
   
     event.preventDefault();
     if(this.state.newTask !== '')
     {


     this.setState({
      tasks: this.state.tasks.concat({id: this.state.count++, name:this.state.newTask, done: false}),
      newTask: ''

     
    })
   }




   }


chequear(index) 
{

this.setState({

  tasks: [ 

  { 
    id: this.state.tasks[index].id,
    name: this.state.tasks[index].name,
    done: !this.state.tasks[index].done 

  }
    
  ]

  
})






 

}
 

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li  key={task.id} className={task.done ? "done" : ""} onClick={this.chequear.bind(this, index)}>{task.name}</li>)}
          </ul>

          <form onSubmit={this.addItem.bind(this)}>
           
            <input className="error" type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter"  value={this.state.newTask} onChange={this.textChange.bind(this)} required/>
          
          </form>
        </div>
      </div>
    )
  }
}

export default App;