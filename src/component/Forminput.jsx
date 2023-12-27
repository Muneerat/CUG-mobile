

export default function FormInput({
    setdate,
     className,
     type= 'text',
     ...props
 }) {
   return (
    <input 
       type={type}
       className={`form-input py-2 px-4 outline outline-[#B9B9B9] rounded-md ${className}`}
       {...props}
       onChange={e =>setdate(e.target.value)}
    />
   )
 }
 