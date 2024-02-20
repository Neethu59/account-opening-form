import axios from 'axios'
import React, { useEffect } from 'react'

export default function Next() {
  return (
    useEffect(()=>{
        axios?.get("http://localhost:4000/getallaccount").then(res=>{
            console.log(res);
        })
    })
  )
}

