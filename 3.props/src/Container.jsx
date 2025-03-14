import React from 'react'

function Container({ children }) {
    return (
        <div>
            <div>Container component is worked</div>
            {children}

        </div>
    )
}

export default Container