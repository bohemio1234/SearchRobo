import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
import { React, useState, useEffect } from 'react';

function App() {
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')
  

  useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setRobots(users))
  },[])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }


    const filteredRobots = robots.filter(robot => { return robot.name.toLowerCase().includes(searchfield.toLowerCase())});
    return (
    <div>
      <h1 className="main-title m-3 p-3 fw-bold bg-light border text-center">SearchRobo</h1>
      <SearchBox searchChange = {onSearchChange}/>
      {robots.length === 0 ? <h2 className="text-center mt-3">loading</h2> : <CardList robots = {filteredRobots} />}
    </div>
    )


}

export default App;
