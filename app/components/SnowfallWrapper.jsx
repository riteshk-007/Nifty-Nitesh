'use client';

import Snowfall from 'react-snowfall';

export default function SnowfallWrapper() {
    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <Snowfall
                color="white"
                snowflakeCount={150}
                style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    zIndex: 9999,
                }}
            />
        </div>
    );
}
