import React, {useState} from 'react';
import CocktailList from '../cocktails.json';
import './cocktails.css'
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import Slide from '@material-ui/core/Slide';

function ing(wibble) {
  let inglist= []
  wibble.map(item => (  
     inglist.push(item.name)
   )
  )
  const properlist = inglist.join(', ')
  return properlist.substring(0, 50) + '...';
}



function Cocktails() {

  const [drinkfilter, setDrinkfilter] = useState('');
  return( 
      <Container maxWidth="lg">
        <form>
        <label>
          <TextField id="outlined-search" label="Search Cocktails" type="search" variant="filled" color="secondary" onChange={event => setDrinkfilter(event.target.value) }
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon>search</Icon>
            </InputAdornment>
          ),
        }}/>
        </label>
      </form>
      <Slide in="true" direction="right">
        <ul>
          {CocktailList.filter(name => name.name.toLowerCase().startsWith(drinkfilter.toLowerCase())).map((item, index) => (            
          <li key={index} > 
            <Link to={'/details/' + item.name}>  
              <h3 style={{margin:0}}>{item.name}</h3>                 
              {ing(item.ingredients)} 
            </Link>              
          </li>         
          ))}
        </ul>
      </Slide>
      </Container>
  )
};

export default Cocktails;