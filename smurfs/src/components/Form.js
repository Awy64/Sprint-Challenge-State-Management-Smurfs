import React, {useState} from 'react';
import {TextField, Button} from '@material-ui/core';
import {connect} from "react-redux";
import {postSmurfs} from "../store/actions"

const Form = ({postSmurfs}) => {
  const [newSmurf, setNewSmurf] = useState({name: "", age: "", height: ""})
  const handleChange = e => {
    setNewSmurf({...newSmurf, 
      [e.target.name]: e.target.value})
  }
  return(
    <div>
      <form>
      <TextField name='name' value={newSmurf.name} placeholder='Name' onChange={handleChange}/>
      <TextField name='age' value={newSmurf.age} placeholder='age' onChange={handleChange}/>
      <TextField name='height' value={newSmurf.height} placeholder='height' onChange={handleChange}/>
      <Button onClick={() => {postSmurfs(newSmurf); setNewSmurf({name: "", age: "", height: ""})}}>add Smurf</Button>
      </form>
    </div>
  )
}


export default connect('', {postSmurfs})(Form);