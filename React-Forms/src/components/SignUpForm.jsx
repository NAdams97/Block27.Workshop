import React from "react"
import { useState } from "react"

export default function SignUpForm() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {error, setError} = useState(null)

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Hello World")
    }

    return <>
    <h2>Sign Up!</h2>
    <form  onClick = {handleSubmit} >
        <label>
            Username: <input value = {username} onChange={(u) => setUsername(u.target.value)} />
        </label>
        <label>
            Password: <input value = {password} onChange={(p) => setPassword(p.target.value)} />
        </label>
        <button>Submit</button>
    </form>
    </>
}
