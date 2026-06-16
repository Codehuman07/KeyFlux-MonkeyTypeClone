import React from 'react'
import { useState,useEffect } from 'react';
import Background from "../components/Background";
function Counting() {
    const[count,setCount] = useState(5)
    useEffect(()=>{
    const timer = setTimeout(()=>{
        if(count>0){
            setCount(count-1)
        }
    },1500)
    return () => clearTimeout(timer)
    },[count])
    return (
        <>
            {/* <Background> */}
                <div className='relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 text-center'>
                    <h1 className='text-6xl text-white'>{count}</h1>
                </div>
            {/* </Background> */}
        </>
    )
}

export default Counting