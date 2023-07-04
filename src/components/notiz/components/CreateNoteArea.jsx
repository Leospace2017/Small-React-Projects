import React, {useState} from "react"


export default function CreateNoteArea({onAdd}){

    const [note, setNote] = useState({ id: 0, title: 'Buy BubbleTea',content:""})

    function handleChange(event){
        const {name,value} = event.target;
        if(value.length <= 99){
            setNote(prevNote => {
                return {
                    ...prevNote,
                    [name] : value
                }
            })
        }

    }

    function submitNote(event){
        event.preventDefault();
        setNote({
            id:0,
            title:"",
            content:""
        })
        onAdd(note);
    }
    return (
        <div>
            <form className="flex flex-col">
                <input 
                    className="text-center bg-yellow-300"
                    name="title" 
                    value={note.title} 
                    onChange={handleChange}
                    placeholder="Title" 
                    required    
                    />
                    
                <textarea 
                    className="text-center resize-y bg-yellow-300"
                    name="content" 
                    id="textarea"
                    value={note.content} 
                    onChange={handleChange}
                    rows="3"
                    placeholder="Take a note">

                </textarea>
                <button onClick={submitNote} className="
                    inline-block mx-auto my-2 p-4  
                    rounded-lg
                    bg-gradient-to-r from-green-400 to-blue-500 
                    hover:from-pink-500 hover:to-yellow-500
                    ">Add</button>
            </form>
        </div>
    )
}