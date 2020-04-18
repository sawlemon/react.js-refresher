import React from 'react';
import CautionList from './components/CautionList.jsx';
import './App.css';


function App() {
  const Cautions = [
    {id:'ca1',text:'Wash Hands'},
    {id:'ca2',text:'Don\'t go out'},
    {id:'ca3',text:'don\'t touch face'},
  ];
  return (
    <div>   
      <h1 className="heading">Precautions</h1>
      <CautionList cautions={Cautions}/>
    </div>
  );
}

export default App;
