import React from "react";
import BorderGlow from "../components/BorderGlow";
import {useNavigate} from 'react-router-dom'

function Landing() {
    const navigate = useNavigate()
    return (
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 text-center">
                <h1 className=" text-4xl text-white">Welcome to KeyFlux</h1>
                <p className="text-lg text-gray-300">
                    Test your typing speed and accuracy!
                </p>
                <BorderGlow
                    edgeSensitivity={30}
                    glowColor="40 80 80"
                    backgroundColor="#120F17"
                    borderRadius={28}
                    glowRadius={40}
                    glowIntensity={1}
                    coneSpread={25}
                    animated={false}
                    colors={['#c084fc', '#f472b6', '#38bdf8']}
                >
                    <div className="p-8 text-white cursor-pointer" onClick={()=>{navigate('/Counting')}}>
                        <h2>Start Typing!!!</h2>
                    </div>
                </BorderGlow>
            </div>
        
    );
}

export default Landing;
