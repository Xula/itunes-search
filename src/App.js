import React, { useState } from 'react';
import './styles/app.css';
import List from './components/List';
import axios from 'axios' ;

function App() {

  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  const [searchTxt, setSearchState] = useState('');
  const [response, setResponse] = useState({})

  function HandleInput(e){
    setSearchState(e.target.value);
  }

  function HandleSearch() {
    axios.get(`https://itunes.apple.com/search?term=${searchTxt}`)
    .then(res => {
      setResponse(res.data);
    })
    .catch(error => console.log(error));
  }

  return (
    <div id="main">
      <input type="text" className="searchTxt" placeholder="Pesquisar..." onChange={HandleInput}></input>
      <button className="searchBtn" onClick={HandleSearch}>Buscar Músicas</button>
      <List data={response} className="musicList"/>
    </div>
  );
}

export default App;
