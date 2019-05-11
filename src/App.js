import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
   state= {
     persons:[
       {id:1, name:'Max',age:28},
       {id:2,name:'Maximum',age:27},
       {id:3,name:'Amol',age:25}
     ],
     showPersons:false
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

   nameChangeHandler= (event,id) =>{
    const personIndex=this.state.persons.findIndex(p=>{
    return p.id === id;
    });

    const person ={
      ...this.state.persons[personIndex]
    };

    //const person=Object.assign({},this.state.persons[personIndex]);
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons})
   }
   togglePersonsHandler=()=>{

    const doesShow =this.state.showPersons;
    this.setState({showPersons:!doesShow});

   }

   deletePersonHandler=(personIndex)=>{
     //const persons=this.state.persons.slice();
     const persons=[...this.state.persons]
     persons.splice(personIndex,1);
     this.setState({persons:persons})
   }
  render(){
    const style={
      backgroundColour: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    }

    let persons=null;
    if(this.state.showPersons){
      persons=(
        <div>
      {
        this.state.persons.map((person ,index)=>{
          return <Person click={()=>this.deletePersonHandler(index)} 
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event)=>this.nameChangeHandler(event,person.id)}/>
        })
      }
      </div> 
      );
    }
    return (
      <div className="App">
      <button 
      style={style}
      onClick={this.togglePersonsHandler}>Switch Name</button>
      
      {persons}
      
 
      </div>
    
 
   );
  }
  
  //React.createElement('div',{className:App},React.createElement('h1',null,'doesthis work'));
}

export default App;
