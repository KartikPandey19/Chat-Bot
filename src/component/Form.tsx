import { useState } from "react"
type Message = {
    text:string,
    sender: 'ai' | 'user'
}
const Form  = () =>{
    const [inputValue,setInputValue] = useState('');
    const [message, setMessage] = useState<Message[]>([
        {text:'hey i am ai', sender:'ai'},
        {text:'hey i am user', sender:'user'}
    ]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.target.value)
    }
    const submitForm:React.FormEventHandler = async(e)=>{
        e.preventDefault();
        setInputValue('');
        const newMessage:Message[] =[...message,{
            text:inputValue,
            sender:'user'
        }];
        setMessage(newMessage);
    }

    return(
        <>
        {message.map((msg, index)=>
             <p key={index} className={"message "+msg.sender}>
                {msg.text}
            </p>
        )}
        <form className="input-form" onSubmit={submitForm}>
            <input 
            type="text" 
            placeholder="Message"
            value={inputValue}
            onChange = {(e)=>handleChange(e)}
             />
            <input type="submit" value="Send" />
        </form>
        </>
    )
}
export default Form