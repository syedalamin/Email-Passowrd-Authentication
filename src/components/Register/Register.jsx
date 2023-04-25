import React from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import apps from '../../firebase/firebase.config';
const auth = getAuth(apps);
import {useState} from 'react';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const hanldeSubmit = (event) =>{
        event.preventDefault();
        setError('');
        setSuccess('');

        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
            if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
                setError('please 2 Upper case letter');
                return;
            }
            else if(!/(?=.*[0-9])/.test(password)){
                setError('please 1 number  letter');
                return;
            }

        
        // console.log(name, password);
        // email and password firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
            setSuccess('user has been success')
            verifiEmail(result.user)
        })
        .catch(error =>{
            // console.error(error);
            setError(error.message)

        })
        
    }

    const verifiEmail = email =>{
        sendEmailVerification(email)
        .then(result =>{
            console.log(result);
            alert('please confirm email')
        })
        .catch(error =>{
            setError(error.message);
        })
    }



    return (
        <div>
            <h3>Please Register</h3>
            <form onSubmit={hanldeSubmit}>
                <input type="text" name="email" id="name" placeholder='Inter Your Name' required/>
                <br />
                <input type="password" name="password" id="password" placeholder='Inter Your Password' required/>
                <br />
                <input type="submit" value="Register" />
            </form>
            
            <p className='text-danger fw-bold'>{error}</p>
            <p className='text-success fw-bold'>{success}</p>

        </div>
    );
};

export default Register;