import React from 'react'
import Cardlist from './Cardlist'
import { robots } from './components/Robots'
import SearchBox from './components/SearchBox'
import './App.css';
class  App extends React.Component {
    constructor()
    {    super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }

    onSearchChange=(event)=>
    {
        this.setState({searchfield:event.target.value})
    }

 render(){
    const filteredrobots =this.state.robots.filter((robots) => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      });
  return (
    <div className="tc">
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Cardlist robots={filteredrobots}/>
    </div>
  )
}
}
export default App;