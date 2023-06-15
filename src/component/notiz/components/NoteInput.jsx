import React, { useState } from "react";

export default function NoteInput({ title, content, onDelete, id, onEdit }) {
  const [editedContent, setEditedContent] = useState(content);
  const [editingMode, setEditingMode] = useState(false);

  function handleClick() {
    onDelete(id);
  }

  function handleEdit() {
    setEditingMode(true);
  }

  function handleSave() {
    onEdit(id, editedContent);
    setEditingMode(false);
  }

  function handleChange(event) {
    setEditedContent(event.target.value);
  }

  return (
    <div className="note w-10/12 h-30 mx-auto my-2 p-1 text-center 
                    bg-green-300 rounded-xl">
      <h2 className="w-3/5 mx-auto px-2 text-white text-lg 
                    inline-block bg-red-600 rounded-lg overflow-x-auto">
        {title}
      </h2>
      {editingMode ? (
        <textarea
          className="note-content 
                    w-4/5 h-32 mx-auto text-ms
                    bg-green-200 whitespace-normal break-all"
          value={editedContent}
          onChange={handleChange}

        ></textarea>
      ) : (
        <p className="note-content 
                    w-4/5 h-fit mx-auto bg-green-200 text-ms
                    whitespace-normal break-all 
                   ">
          {content}
        </p>
      )}
      {editingMode ? (
        <button
          onClick={handleSave}
          className="text-xs p-2 bg-blue-400 rounded 
                    hover:bg-blue-600"
        >
          Save
        </button>
      ) : (
        <button
          onClick={handleEdit}
          className="text-xs p-2 ml-2 bg-blue-400 rounded 
                    hover:bg-blue-600"
        >
          Edit
        </button>
      )}
      <button
        onClick={handleClick}
        className="text-xs p-2 bg-red-400 rounded 
                    hover:bg-red-600"
      >
        DELETE
      </button>
    </div>
  );
}
