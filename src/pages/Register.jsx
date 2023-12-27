import React from 'react';
import { useState } from 'react';
import logo from "../assets/bluelogo.png";
import FormInput from '../component/Forminput';
import FormPassword from '../component/Formpassword';
import FormError from '../component/FormError';
import Button from '../component/Button';

export default function Login() {
    const [names, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({});


    const submit = (e) => {
        e.preventDefault();
        setErrors({});
        //validate
        if(!names){
            setErrors({name: 'Name is required'})
        }
        if(!email){
            setErrors({email: 'Email is required'})
        }
        if(!password){
            setErrors({password: '<PASSWORD>'})
        }
        if(Object.keys(errors).length > 0){
            return;
        }
       
        //save to local storage
        const user = {
            names,
            email,
            password
        }
        localStorage.setItem('user',[JSON.stringify(user)]);

    
    }
  return (
    <div className='flex justify-center items-center m-auto bg-white max-w-xl'>
    <div>
    <img src={logo} alt='' className='flex justify-center items-center mx-auto my-4'/> 
    <h1 className=' font-extrabold text-4xl py-4 text-[#0F515F]'>Welcome Back</h1>
    <form className="max-w-sm mx-auto" onSubmit={submit}>
                <div className="max-w-sm mx-auto">
                <div className="my-5">
                   
                    <FormInput
                        maxLength={255}
                        id="name"
                        setdate={setName}
                        required
                        value={names}
                        placeholder="Enter Name"
                        className="block w-full"
                    />
                    <FormError
                        error={errors?.name}
                    />
                </div>
                <div className="my-5">
                    
                    <FormInput
                        type="email"
                        maxLength={255}
                        id="email"
                        setdate={setEmail}
                        required
                        value={email}
                        placeholder="Enter Name"
                        className="block w-full"
                    />
                    <FormError
                        error={errors?.email}
                    />
                </div>
                <div className="my-5">
                   
                    <FormPassword
                        type="password"
                        maxLength={255}
                        id="password"
                        setdate={setPassword}
                        required
                        value={password}
                        placeholder="************"
                        className="block w-full"
                    />
                    <FormError
                        error={errors?.password}
                    />  
                </div>
                <div className="my-5">  
                 <Button 
                   type="submit"
                   disabled={processing}
                   spin={processing}>
                    Submit
                   </Button>
                </div>

                </div>
            </form>
    </div>
     
    </div>
  )
}
