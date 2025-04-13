import React, { useState } from 'react';
const jokes = [
"Why don't skeletons fight each other? They don't have the guts!",
"Why did the scarecrow win an award? Because he was outstanding in his field!", 

"I used to play piano by ear, but now I use my hands.",
"Why don't scientists trust atoms? Because they make up everything!",

];
const Content = () => {
const [joke, setJoke] = useState('');
const getJoke = () => {
const random = jokes[Math.floor(Math.random() * jokes.length)];
setJoke(random);
};
return (
<div>
<button onClick={getJoke}>Tell me a joke</button>
<p>{joke}</p>
</div>
);
};
export default Content;

