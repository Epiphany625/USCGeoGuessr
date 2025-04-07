import React, {useState} from 'react'
import axios from 'axios'

const inputStyle = {
    padding: '8px',
    margin: '5px 0',
    width: '250px',
    border: '1px solid #ccc',
    borderRadius: '4px',
};

const buttonStyle = {
    padding: '10px 20px',
    margin: '10px 10px 0 0',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
};

const loginButton = {
    ...buttonStyle,
    backgroundColor: '#990000',
};

const signupButton = {
    ...buttonStyle,
    backgroundColor: '#FFCC00',
};

const Login = (props) => {
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")


    const handleLogin = async (event) => {
        event.preventDefault();
        try{
            await axios.post("http://localhost:8080/user/login", {
                username: userName,
                password: userPassword, 
            })
            props.toggleFunc(true);
        }
        catch(err) {
            setErrMsg("Wrong credentials, or ther user does not exist");
        }
    }
    return (
        <div>
            <h3>
                Think you know campus? drop a pin, and prove you're ultimate Trojan Explorer!
            </h3>
            <form onSubmit={handleLogin}>
                <p>Username</p>
                <input style={inputStyle} value={userName} onChange={(e) => setUserName(e.target.value)} />
                <p>Password</p>
                <input style={inputStyle} value={userPassword} type='password' onChange={(e) => setUserPassword(e.target.value)} />
                <div>
                    <button style={loginButton}>Log in</button>
                </div>
                <p style={{ color: 'red' }}>{errMsg}</p>
            </form>
        </div>
    )
}

const Signup = (props) => {
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [confirmUserPassword, setConfirmUserPassword] = useState("");
    const [errMsg, setErrMsg] = useState("")


    const handleSignup = async (event) => {
        event.preventDefault();
        if (confirmUserPassword !== userPassword) {
            setErrMsg("The two passwords do not match");
            return;
        }
        try{
            await axios.post("http://localhost:8080/user/signup", {
                username: userName,
                password: userPassword, 
            })
            props.toggleFunc(true);
        }
        catch(err) {
            setErrMsg("User already exists. Please provide a different username. ");
        }
    }
    return (
        <div>
            <h3>
                Think you know campus? drop a pin, and prove you're ultimate Trojan Explorer!
            </h3>
            <form onSubmit={handleSignup}>
                <p>Username</p>
                <input value={userName} style={inputStyle} onChange={(e) => setUserName(e.target.value)} />
                <p>Password</p>
                <input value={userPassword} style={inputStyle} type='password' onChange={(e) => setUserPassword(e.target.value)} />
                <p>Confirm your password</p>
                <input value={confirmUserPassword} style={inputStyle} type='password' onChange={(e) => setConfirmUserPassword(e.target.value)} />
                <div>
                    <button style={signupButton}>Sign up</button>
                </div>  
                <p style={{ color: 'red' }}>{errMsg}</p>
            </form>
        </div>
    )
}

function LoginSignUp(props) {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div style={{backgroundColor: "#990000", display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
            <div style={{opacity:"0.9", backgroundColor:"white", padding:"30px", borderRadius:"20px", border: "#FFCC00 5px solid"}}>
                <h1 style={{fontSize:'32px',marginBottom:'10px' }}>USC GeoGuessr</h1>
                <div style={{marginBottom: '20px'}}>
                    <button style={loginButton} onClick={() => setIsLogin(true)}>Log in</button>
                    <button style={signupButton} onClick={() => setIsLogin(false)}>Sign up</button>
                </div>
                {isLogin && <Login toggleFunc={props.toggleFunc}/>}
                {!isLogin && <Signup toggleFunc={props.toggleFunc}/>}
            </div>
        </div>

    )
}

export default LoginSignUp;