import React, { useEffect, useState } from 'react'
function Typing() {
    const[timer, setTimer] = useState(60)
    const[textinput, setTextinput] = useState("")
    const[para,setPara] = useState("The quick brown fox jumped over the lazy dog.")
    function onchange(e){
        setTextinput(e.target.value)
    }
    useEffect(() => {
        const time = setTimeout(() => {
            if (timer > 0) {
                setTimer(timer - 1)
            }
        }, 1000)
        return () => clearTimeout(time)
    }, [timer])
    return (
        <div className='z-10 min-h-screen flex flex-col items-center'>
            <h1 className='text-6xl text-white pt-8'>KeyFlux</h1>
            <div className='flex-1 flex flex-col items-center justify-center w-full gap-12'>
                <div className='border-2 border-white flex justify-around items-center p-5 w-[80%]'>
                    <h3 className='text-white'>Time: {timer}</h3>
                    <h3 className='text-white'>WPM: </h3>
                    <h3 className='text-white'>Accuracy: </h3>
                </div>
                <div className='border-2 border-white flex justify-around items-center p-10 w-[80%]'>
                    <h1 className='text-white text-3xl'>{para}</h1>
                </div>
                <input type="text" value={textinput} onChange={onchange} autoFocus className='w-0 h-0 opacity-0'></input>
            </div>
        </div>
    )
}

export default Typing