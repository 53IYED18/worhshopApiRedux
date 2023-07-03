import Cards from './Component/Cards'
import axios from 'axios'
import React,{useEffect, useState} from 'react';

function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get('http://192.168.2.181:5500/api/getProduct').then((res)=>{setData(res.data); console.log(data)}).catch((err)=>console.log(err))},[])
  return (
    <div className="App" style={{display:'flex'}}>
      {data.map((el)=><Cards product={el}/>)}
    </div>
  );
  }

export default App;