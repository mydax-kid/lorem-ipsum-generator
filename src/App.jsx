import './App.css';
import {useState} from 'react';
import data from './data.js';

function App() {
  const [count, setCount] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const generateParagraphs = (e) => {
    e.preventDefault();
    let newCount = parseInt(count);
    setParagraphs(data.slice(0, newCount));
  }

  const setLimit = (e) => {
    if (e.target.value < 1) {
      setCount(1);
    } else if (e.target.value > data.length) {
      setCount(data.length);
    }
    else {
      setCount(e.target.value);
    }
  }

  
  return (
    <main>
      <h2>Tired of boring lorem ipsum</h2>
      
      <form className='lorem-form' >
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value= {count}
          onChange= {setLimit}
        />
        <button className='btn' onClick= {generateParagraphs}>GENERATE</button>
      </form>
      
      <div className='content'>
        {paragraphs.map((item, index) => {
          return(
        <p key={index}><span>>></span>{item}</p>
          )
        })}
      </div>
    </main>
  )
}

export default App;

