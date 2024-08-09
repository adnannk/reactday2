import { TextField ,Button} from '@mui/material'
import React from 'react'

const Signup2 = () => {
  return (
    <div>
       <TextField variant='outlined'label='Name'></TextField> <br />
       <TextField variant='outlined'label='Age'></TextField>  <br />
       <TextField variant='outlined'label='Number'></TextField> <br />
       <TextField variant='outlined'label='Password'></TextField> <br />
       <Button variant='contained'>submit</Button> 
            </div>
        
  )
}

export default Signup2
