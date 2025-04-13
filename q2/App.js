import React from 'react';
import './styles.css'; 

const App = () => {
  const inlineStyle = {
    backgroundColor: 'blue',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    margin: '10px'
  };

  return (
    <div>
    
      <button style={inlineStyle}>Inline Styled Button</button>
      
      
      <style>
        {`
          .internal-button {
            background-color: green;
            color: white;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            margin: 10px;
          }
        `}
      </style>
      <button className="internal-button">Internal Styled Button</button>
      
      
      <button className="external-button">External Styled Button</button>
    </div>
  );
};

export default App;
