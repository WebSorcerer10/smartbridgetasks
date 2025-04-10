import { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  return (
    <div className="p-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type something..."
      />
      <p className="mt-2 text-gray-700">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater; 