import React, { useEffect, useState } from 'react'
import { paragrphs } from '../components/paragraphs'
function Typing() {
    const [timer, setTimer] = useState(60)
    const [textinput, setTextinput] = useState("")
    const [started, setStarted] = useState(false)
    const [para, setPara] = useState("")
    const timeUsed = 60 - timer
    const completed = textinput.length >= para.length
    function refresh(){
        window.location.reload()
    }
    function paragraphgenerator(){
        const numb = Math.floor(Math.random()*10)
        setPara(paragrphs[numb])
    }
    useEffect(()=>{
        paragraphgenerator()
    },[])
    let wpm = 0
    const correct = para.split("").filter((char, index) => {
        return textinput[index] === char
    }).length
    const wrong = textinput.length - correct
    let accuracy = 0
    if (correct + wrong > 0){
        accuracy = (correct/(correct + wrong))*100
    }
    if (timeUsed > 0) {
        wpm = Math.round((correct / 5) / (timeUsed / 60))
    }
    function onchange(e) {
        if (started === false) {
            setStarted(true)
        }
        setTextinput(e.target.value)
    }
    useEffect(() => {
        const time = setTimeout(() => {
            if (timer > 0 && started === true && completed===false) {
                setTimer(timer - 1)
            }
        }, 1000)
        return () => clearTimeout(time)
    }, [timer, started, completed])
    return (
        <div className='z-10 min-h-screen flex flex-col items-center'>
            <h1 className='text-6xl text-white pt-8'>KeyFlux</h1>
            <div className='flex-1 flex flex-col items-center justify-center w-full gap-12'>
                <div className='border-2 border-white flex justify-around items-center p-5 w-[80%]'>
                    <h3 className='text-white'>Time: {timer}</h3>
                    <h3 className='text-white'>WPM: {wpm}</h3>
                    <h3 className='text-white'>Accuracy: {accuracy.toFixed(1)}%</h3>
                </div>
                <div className='border-2 border-white flex justify-around items-center p-10 w-[80%]'>
                    <h1 className='text-white'>{para.split("").map((char, index) => {
                        let color = 'text-white'
                        if (index < textinput.length) {
                            if (textinput[index] === char) {
                                color = 'text-green-500'
                            } else {
                                color = 'text-red-500'
                            }
                        }
                        return (
                            <span className={color} key={index}>{char}</span>)
                    })}
                    </h1>
                </div>
                {/* <h1 className='text-white'>{completed.toString()}</h1> */}
                {completed && <button className='text-white cursor-pointer border-2 border-white pr-7 pl-7 pt-3 pb-3' onClick={refresh}>Reset</button>}
                <input type="text" value={textinput} onChange={onchange} autoFocus className='w-0 h-0 opacity-0' />
            </div>
        </div>
    )
}

export default Typing