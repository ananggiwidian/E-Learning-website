import { Children } from "react"

const Label = (props) => {
    const { name, children } = props
    return (
        <label htmlFor={name} className="mb-1 text-xs sm:text-sm">
            {children}
        </label>
    )
}

export default Label