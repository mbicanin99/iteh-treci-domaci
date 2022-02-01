import { useState } from 'react'

function Login(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    return (
        <div>
            <div className="login-form">
                <h1>{props.tekst}</h1>
                <div className="login-field">
                    <label for='username_field' id='lbl_username'>Username: </label>
                    <input type={'text'} id='username_field' value={username} onChange={handleUsername}></input>
                </div>
                <div className="login-field">
                    <label for='password_field' id='lbl_password'>Password: </label>
                    <input type={'password'} id='password_field' value={password} onChange={handlePassword}></input>
                </div>
                <button type="button" onClick={() => props.login(username, password)} id='btn_login'>Login</button>
            </div>

        </div>
    );
}


export default Login;