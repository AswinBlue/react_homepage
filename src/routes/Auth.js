import React, {useState} from "react";
import { authService, firebaseModule } from "../components/AppFirebase";

// export default() => <span>Auth</span>;
const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const [error, setError] = useState("");

    const onChange = (event) => {
        // console.log(event.target.name);
        const {target: {name, value}} = event;  // get some values from 'event'
        if (name === "email") {
            setEmail(value)
        }
        else if (name === "password") {
            setPassword(value)
        }
    };

    const onSocialClick = async (event) => {
        // console.log(event.target.name);
        const {target: {name}} = event;  // get some values from 'event'
        try {
            let provider;
            if (name === "google") {
                provider = new firebaseModule.auth.GoogleAuthProvider();
            } else if (name === "github") {
                provider = new firebaseModule.auth.GithubAuthProvider();
            }
            await authService.signInWithPopup(provider);
        } catch (e) {
            setError(e.message);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault(); // don't want default func to be run. don't refresh page
        try {
            let data;
            if (newAccount) {
                // join
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                // login
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data)
        } catch (e) {
            // console.log(error);
            setError(e.message);
        };
    };

    const toggleAccount = () => {
        // console.log(newAccount);
        setNewAccount(!newAccount)
    };

    return (
        <>
            <form onSubmit={onSubmit}>
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
                <input name="submit" type="submit" value={newAccount ? "Create Account" : "Log in"}></input>

            </form>
            <span>{error}</span>
            <span onClick = {toggleAccount}>
                {newAccount ? "Create Account" : "Sign In"}
            </span>
            <div>
                <button onClick = {onSocialClick} name = "google">Continue with Google</button>
                <button onClick = {onSocialClick} name = "github">Continue With Github</button>
            </div>
        </>
    );
}
export default Auth;
