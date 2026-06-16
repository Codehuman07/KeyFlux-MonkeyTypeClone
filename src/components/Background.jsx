import React from 'react'
import Particles from '../components/Particles'

function Background({ children }) {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                position: 'relative',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                }}
            >
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

            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default Background