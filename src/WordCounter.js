import React, { useState } from 'react';

function WordCounter() {
    const [text, setText] = useState('');

    const countWords = (text) => {
        const words = text.trim().split(/\s+/);
        return words.length;
    }

    return (
        <div>
            <textarea
                rows="4"
                cols="50"
                placeholder="Type your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>Word Count: {countWords(text)}</p>
        </div>
    );
}

export default WordCounter;
