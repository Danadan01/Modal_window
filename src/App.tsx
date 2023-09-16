import { useState } from 'react'
import './App.css';
import Modal from './Modal';


function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>CALL THE MODAL</button>
      {isOpen && <Modal setIsOpen={setIsOpen}/>}
    </>
  )
}

export default App
