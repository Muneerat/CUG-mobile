import { useState } from "react";
import FormInput from "../component/Forminput";
import FormError from "../component/FormError";
import FormPassword from "../component/FormPassword";
import logo from "../assets/bluelogo.png";
 import Button from "../component/Button";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors]  = useState({});

     const[processing, setProcessing] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setErrors({});

     
        // save to localStorage
        const user = {
            names,
            email,
            password
        };

        localStorage.setItem('users', [JSON.stringify(user)]);
        

       

    }

    return (
        <>
            
            <img src={logo} alt='' className='flex justify-center items-center mx-auto my-4'/> 
            <h1 className=' font-extrabold text-4xl py-4 text-[#0F515F] text-center'>Welcome Back</h1>

                <form className="max-w-sm mx-auto" onSubmit={submit}>

                    <div className="my-5">
                        
                        <FormInput
                            type="email"
                            maxLength={255}
                            id="email"
                            setData={setEmail}
                            required
                            value={email}
                            placeholder='Enter Email'
                            className="block w-full"
                        />

                        <FormError
                            error={errors?.email}
                        />
                    </div>

                    <div className="my-5">
                        
                        <FormPassword
                            minLength={8}
                            id="password"
                            setData={setPassword}
                            required
                            value={password}
                            placeholder='*********'
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
                            spin={processing}
                        >
                            Submit
                        </Button>
                    </div>
                </form>
        </>
    )
}