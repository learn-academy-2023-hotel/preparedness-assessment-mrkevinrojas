import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // The application has a variable where data is stored and updated 
  const [inputField, setInputField] = useState("")

  // The application has a function to make the input box empty when the reset button is clicked:
  const resetButton = () => {
    setInputField("")
  }

  // The application has a function where the user's input is saved to the usestate variable
  const handleChange = (e) => {
    setInputField(e.target.value)
  }
  return (
    <div className="entire-content">
      {/* the application has a title 'Preparedness Assessment. */}
      <h1 className="header-color"> Preparedness Assessment </h1>
      <div className="form">
        <div className="input" >
          <Label for="name" className="input-label" >Enter your name</Label>
          {/* Put input field in its own div. */}
          <div className="input-field">
          {/* Data will be stored in inputField as well as updated */}
          <Input type="text" value={inputField} onChange={handleChange} />  
          </div>

        </div>

        {/* Organizes the buttons */}
        <div className="buttons">
        <ModalComponent input={inputField}/>
        <Button onClick={resetButton} > Reset </ Button>
        </div>
      </div>
    </div>
  )
}

export default App
