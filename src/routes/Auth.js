import React, {useState} from "react";

// export default() => <span>Auth</span>;
const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) => {
        console.log(event.target.name);
        const {target: {name, value}} = event;  // get some values from 'event'
        if (name === "email") {
            setEmail(value)
        }
        else if (name === "password")  {
            setPassword(value)
        }
    }
    const onSubmit = (event) => {
        event.preventDefault(); // don't want default func to be run. don't refresh page
    }
    return (
        <>
            <form onSUbmit={onSubmit}>
                <input 
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}   // input by user
                    onChange={onChange} // whenever user put something, state will be changed
                    />
                <input 
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}    // input by user
                    onChange={onChange}
                    />
                <input name="submit" type="submit" value="Log in"></input>

            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue With Github</button>
            </div>
        </>
    );
}
export default Auth;
