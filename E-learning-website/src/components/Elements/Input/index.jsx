import Label from "./label";
import Input from "./input";

const InputArea = (props) => {
    const { type, name, LabelName} = props
    return (
        <div className="flex flex-col mb-6">
            <Label htmlFor={name}>{LabelName}</Label>
            <Input type={type} name={name}/>
        </div>
    )
}

export default InputArea