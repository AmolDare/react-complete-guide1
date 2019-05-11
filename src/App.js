import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
   state= {
     persons:[
       {name:'Max',age:28},
       {name:'Maximum',age:27},
       {name:'Amol',age:25}
     ]
   }

   switchNameHandler = (newName)=>{
    // console.log('was clicked');
    this.setState({persons: [
      {name:newName,age:28},
       {name:'Maximum',age:27},
       {name:'Amol',age:26}
    ]
    })
   }

   nameChangeHandler= (event) =>{
    this.setState({persons: [
      {name: event.target.value, age:27},
      {name:'max',age:28},
      
       {name:'Amol',age:26}
    ]
    })
   }
  render(){
    const style={
      backgroundColour: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
      <button 
      style={style}
      onClick={this.switchNameHandler.bind(this,'Maxmilioan')}>Switch Name</button>
      <Person name={this.state.persons[0].name} 
      age={this.state.persons[0].age}
      click={()=>this.switchNameHandler('gyt')}
      changed={this.nameChangeHandler}
      >
      
      </Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>

 
      </div>
    
 
   );
  }
  
  //React.createElement('div',{className:App},React.createElement('h1',null,'doesthis work'));
}

export default App;
