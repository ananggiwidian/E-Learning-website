const Input = (props) => {
    const { type, name } = props
    return (
        <input type={type} name={name}
        className="text-sm sm:text-base placeholder-white pl-10 pr-4 rounded-lg border border-gray-600 w-full py-2 focus:outline-none focus:border-blue-400"/>
    )
}

export default Input