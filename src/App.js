import React, {useState} from 'react';
import './App.css';

function App() {
  const [songList, setSongList] = useState([]);
  const [value, setValue] = useState("");
  const [filterSongs, setFilterSongs] = useState("");
  //console.log(songList);

const inputHandler = (e) => {
  setValue(e.target.value);
}

  const submitHandler = (e) => {
    e.preventDefault();
    setSongList([value, ...songList]);
    setValue("");
  }
   const filtered = songList.filter((el) => el.includes(filterSongs));

  return (
    <div className='listdiv'>
      <h1>Add your songs</h1>
      <form onSubmit={e => submitHandler(e)}>
<input value={value} placeholder='Enter a new song name' onChange={e => inputHandler(e)}></input>
<button type="submit" >Add</button>
<button onClick={() => setSongList([])} >Reset</button>
</form>
<div>
  {songList.map((x,idx) => (<div key={idx}>{x}</div>))}
</div>
<h1>Search your songs</h1>
<input placeholder='Enter a new song name' onChange={e => setFilterSongs(e.target.value)}></input>
<div>
  {filtered.map((x,idx) => (<div key={idx}>{x}</div>))};
</div>
    </div>
  );
}

export default App;
