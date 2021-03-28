import Cards from '../components/Products/Products';
import Main from '../components/Main/Main-home-guest';
import React, { useContext } from 'react';
import { AuthContext } from '../Auth';

function Home() {
  const { currentUser } = useContext(AuthContext);

  if(currentUser){
  return (
    <Cards />  
  )
  } else if(!currentUser){
    return (
      <Main />    
    )
  }
}

export default Home;