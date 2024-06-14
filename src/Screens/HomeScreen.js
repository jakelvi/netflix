import React from 'react'
// import "./HomeScreen.css"
import Nav from '../NavBar'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../Requests'

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow/>
        
      <Row
        title="TrendingNow"
        fetchUrl={requests.fetchTrending} />
      
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies } />
      
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies } />
      
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies } />

      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies }/>
      
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentariesMovies }/>
    </div>
  )
}

export default HomeScreen