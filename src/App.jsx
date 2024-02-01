import React from 'react'
import QRCodeGenerator from './components/QRCodeGenerator';

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 flex h-screen justify-center items-center bg-center bg-cover px-4" >
      <QRCodeGenerator />
    </div>
  );
}

export default App;
