import React from 'react'

function Login() {
    return (
        <div>
            <div>
                <p>Username: </p>
                <input type="text" />
            </div>
            <div>
                <p>Password: </p>
                <input type="password" />
            </div>
            <div>
                <button>Log in</button>
            </div>
        </div>
    )
}

export default Login