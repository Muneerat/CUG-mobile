import { useState } from "react";
import {HiEye, HiEyeSlash} from "react-icons/hi2"
export default function FormPassword({
  setdate,
    type='password',
    className,
  ...props
}) {
    const [inputType, setInputType] = useState(type);
  return (
    <div className="relative w-full">
        <input
            type={inputType}
            onChange={e => setdate(e.target.value)}
            className={`form-input py-2 px-4 pr-12 outline outline- rounded-md ${className}`}
            {...props}
        />
        <button 
           type="button"
           className="absolute right-3 top-3 z-[1px]"
           onClick={() => setInputType(inputType == "password" ? 'text' : 'password')}>
             {
                inputType == 'password' ? <HiEye/> : <HiEyeSlash/>
             }
           </button>
    </div>
  )
}
