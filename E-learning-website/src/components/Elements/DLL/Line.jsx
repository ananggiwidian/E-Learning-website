const Line = (props) => {
    const {LineText} = props
    return(
            <div className="flex justify-evenly space-x-2 w-auto mt-4 ">
                <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
                <span className="flex-none uppercase text-xs text-gray-400 font-semibold">{LineText}</span>
                <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            </div>
    )
}

export default Line