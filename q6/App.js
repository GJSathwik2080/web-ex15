import React from 'react';
const Child = ({ message }) => {
return <h2>Message from Parent: {message}</h2>;
};
const Parent = () => {
const msg = "Prop message from parent to child!";
return (
<div>
<h1>Parent Component</h1>
<Child message={msg} />
</div>
);
};
const App = () => {
return (
<div>
<Parent />
</div>
);
};
export default App;

