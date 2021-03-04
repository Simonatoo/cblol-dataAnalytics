import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function Toppicks(){

    //Criando uma variável com State
    const [picks,setPicks] = useState([])

    useEffect(()=>{
        fetchPicks()
    },[])

    const fetchPicks=async()=>{
        const res=await Axios("https://cblolanalytics.ue.r.appspot.com/top/picks")
        let out = []
        Object.keys(res.data.personagens).forEach(key => {
            out.push([key,res.data.personagens[key]])
        })
        setPicks(out)
    }

    return(
        <div>
            {picks.map(pick=>{
                return <p>{pick[0]}</p>
            })}
        </div>
    )
}
    