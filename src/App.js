import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {ACTION, ORGINALS, TRENDING, COMEDY, HORROR, ROMANTIC} from './constants/constants'

function App() {


  return (
	<div className="App">'
		<NavBar />
		<Banner />
		<RowPost url={ORGINALS} title='Netflix Orginals'  />
		<RowPost url={ACTION} title='Action Movies' isSmall />
		<RowPost url={TRENDING} title='Trending' isSmall />
		<RowPost url={COMEDY} title='Comedy Movies' isSmall />
		<RowPost url={HORROR} title='Horror Movies' isSmall />
		<RowPost url={ROMANTIC} title='Romantic Movies' isSmall />


	</div>
	
  )
}

export default App
