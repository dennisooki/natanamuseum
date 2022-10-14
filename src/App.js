import './App.css';
import mascot from './assets/img/mascotuhd.png';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import './Login.css';



function App() {
    const [splashed, setsplashed] = useState(false)
    const [pwdshown, setpwdShown] = useState(false);
    const [signup, setsignup] = useState(false);
    return (
        <div className="App">
            <img id='mainimg' draggable={false} src={mascot} className='B4Mascot' />
            <div id='mainlogin' className='Login'>
                <span>{signup ? "Sign Up" : "Log in"}</span> {signup ? "for an" : "to your"} account
                <div spellCheck={false}>
                    <input placeholder='USERNAME/EMAIL' type='email' /><br />
                    <input placeholder='PASSWORD' type={pwdshown ? "text" : "password"} />
                    <button onClick={() => setpwdShown(!pwdshown)}>{pwdshown ? "Hide Me" : "Show Me"}</button><br />
                    {signup && <input placeholder={signup ? "Retype password" : "Retype password-off"} type={pwdshown ? "text" : "password"} />}
                    <button >{signup ? "Sign Up" : "Log in!"}</button><br />
                    <p>or continue <span>anonymously</span></p>
                    <button>Other sign in options</button><br />
                    <button onClick={() => { Resplash() }}>{!signup ? "Sign Up?" : "Log in"}</button><br />
                </div>

            </div>
            
            <TypeAnimation
                sequence={[
                    'natana museum', // Types 'One'
                    () => {
                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                        document.getElementById("mainimg").className = "Mascot";

                    }, 3000,
                    () => {
                        setsplashed(true)
                    }

                ]}
                className='maintext'
                wrapper="span"
                cursor={false}
                repeat={0}
                speed={30}
                style={{ fontSize: '3vw' }}
            />
            {splashed && <Login />}
        </div>
    );
    async function Resplash() {
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        document.getElementById('mainlogin').style.opacity = '0'
        document.getElementById("mainimg").className = "Mascot-Splash";

        await sleep(2500)
        setsignup(!signup)
        document.getElementById("mainimg").className = "MiniMascot";
        document.getElementById('mainlogin').style.opacity = '1'

    }
}

function Login() {
    document.getElementById("mainimg").className = "MiniMascot";
    document.getElementById("mainlogin").className = "Login-Visible";
}

export default App;