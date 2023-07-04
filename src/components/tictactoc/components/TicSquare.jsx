//import { useState } from 'react';

export default function Square({value, onSquareClick}) {

    return (
    <button 
        className="square h-8 w-8 border border-black text-blue-900"
        onClick={onSquareClick}
        >
        {value}
    </button>
    )
}

