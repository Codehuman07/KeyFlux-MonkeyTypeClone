import React from 'react'
import Particles from '../components/Particles'

function Background() {
    return (
        <>
            <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <Particles
                particleColors={["#ffffff"]}
                particleCount={800}
                particleSpread={20}
                speed={0.1}
                particleBaseSize={50}
                moveParticlesOnHover
                alphaParticles={false}
                disableRotation={true}
                pixelRatio={1}
            />
            </div>
        </>
    )
}

export default Background