import React,{useState,useEffect} from 'react'; 
import Header from './comp/header'
import Axios from 'axios'
import Toppicks from './comp/top_picks'




function App() {
  return (
    <div>
      <Header/>
      <Toppicks/>
    </div>
  )
}

export default App;


//<button onClick={() => setVideo(videos[2])}>

// const [picks,setPicks]=useState([])

// useEffect(() => {
//   fetchComments();
// }, [])

// const fetchComments=async()=>{
//   const response=await Axios('https://cblolanalytics.ue.r.appspot.com/top/picks');
//   let out = []
//   Object.keys(response.data.personagens).forEach
//   (key => {
//     out.push([key,response.data.personagens[key]]);
//   });
//   setPicks(out)    
// }

// useEffect(() => {
//   console.log(picks)
// }, [picks])
// {picks.map(pick=>{
//   return <p>{pick[0]}:{pick[1]}</p>
// })}
