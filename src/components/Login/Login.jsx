import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import apps from '../../firebase/firebase.config';
import {useState, useRef} from 'react';
const auth = getAuth(apps);

const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const emailRef = useRef();

    const hanldeLogin= (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        setSuccess('');

        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('user login done')
            form.reset();
        })
        .catch(error =>{
            console.error(error);
            setError(error.message)
        })
    }

    const handleReset = () =>{
        const email = emailRef.current.value;

        if(!email){
            alert('please provide your email')
        }
        sendPasswordResetEmail(auth, email)
        .then(() =>{
            alert('please chake your email')
        })
        .catch(error =>{
            console.log(error)
            setError(error.message);
        })
    }

    return (
        <div>
            <h2>please login</h2>
            <form onSubmit={hanldeLogin}>
                <input type="text" name="email" id="name" ref={emailRef} placeholder='Inter Your Name' required/>
                <br />
                <input type="password" name="password" id="password" placeholder='Inter Your Password' required/>
                <br />
                <input type="submit" value="Register" />
            </form>
            <p><button className='btn-link btn' onClick={handleReset}>Reset Password</button></p>
            <p className='text-danger fw-bold'>{error}</p>
            <p className='text-success fw-bold'>{success}</p>
        </div>
    );
};

export default Login;