export default function Button({
    type='submit',
    spin = false,
    className='',
    children,
    ...props
}) {

    return (
        <button
            type={type}
            className={`px-6 py-3 rounded-md inline-flex items-center justify-center bg-green-900 text-white hover:bg-opacity-80 transition ease-in-out duration-150 disabled:cursor-not-allowed disabled:opacity-50 gap-2`}

            {...props}
        >
            {
                spin && 
                <div className="w-4 h-4 rounded-full border-r border-t text-white animate-spin">
                    <span className="sr-only">Processing</span>
                </div>
            }
            {children}
        </button>
    )
}