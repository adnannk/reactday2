import { AppBar ,Button,Toolbar,Typography} from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h6'>Myapp</Typography>
                <Link to='/Signup'>            
              
                <Button variant='contained'>login</Button>  
                </Link>

                <Link to='/Login'>            
              
              <Button variant='contained'>baa</Button>  
              </Link>

              <Link to='/state'>            
              
              <Button variant='contained'>Signup</Button>  
              </Link>
              
              <Link to='/api'>

              <Button variant='contained'>Api</Button>
              </Link>

             
            </Toolbar>
        </AppBar>
        <br /><br /><br /><br />
    </div>
  )
}

export default Navbar