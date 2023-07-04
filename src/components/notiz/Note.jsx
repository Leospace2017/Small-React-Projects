import React, { useState } from "react"
import CreateNoteArea from "./components/CreateNoteArea"
import NoteHeader from "./components/NoteHeader"
import NoteInput from "./components/NoteInput"
import withHOC from "../hoc"



function Note() {

  const [notes,setNotes] = useState([]);


  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes,newNote];
    })
  }

  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((noteItem, index)=> {
        return index !== id;
      })
    })
  }

  function editNote(id, editedContent){
    setNotes((prevNotes) => {
      return prevNotes.map((noteItem, index) => {
        if (index === id) {
          return {
            ...noteItem,
            content: editedContent,
          };
        }
        return noteItem;
      });
    }

    )
  }
    return (
      (
        <div 
          id="Notiz"
          className="w-6/12 m-auto rounded-full mt-14">
          <NoteHeader />
          <CreateNoteArea 
            onAdd={
              addNote
            }
          />
          {notes.map((noteItem,index) => {
            return <NoteInput 
              key={index}
              id={index}
              title={noteItem.title}
              content = {noteItem.content}
              onDelete={deleteNote}
              onEdit={editNote}
            />
          })}
          

        </div>
      )
    )
  }

  const HOCNote = withHOC(Note,0,-50)

  export default HOCNote;
  