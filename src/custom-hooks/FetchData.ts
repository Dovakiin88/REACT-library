import React, { useState, useEffect } from 'react'
import { server_calls } from '../api'

export const useGetData = () => {
  
    const[BookData, setData] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.get();
        setData(result)
    }
    
  {/*  async function handleDataFetch(){
        const result = await server_calls.get();
    }*/}

    useEffect(  () =>{
        handleDataFetch();
    }, [])

    return {BookData,getData: handleDataFetch}
}