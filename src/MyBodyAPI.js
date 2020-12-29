import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';


function MyBodyAPI() {
    
    const url = 'https://api.mcsrvstat.us/2/brandonkuchnicki.com';
    
    const [server, setServer] = useState(null)
    
  
   useEffect(() => {
      Axios.get(url)
      .then(response => {
          setServer(response.data)
      })
   }, [url])

      if(server){
          return (
              
              <div>
                  <Jumbotron>
                  
                  <h1 className="Motd">{server.motd.raw[0].replace('§r', '')}</h1>
                    
                    <br />
                        <h2>To connect use:</h2>
                        <br />
                      <h2 className='HostName'>{server.hostname}</h2>
                      <h2>or</h2>
                      <h1>IP: {server.ip}</h1>
                      <br />
                    

                    
                      {
                          (() => {
                          if(server.online === true)
                          return (
                              <span><h1 className='OnlineYes'>Server is Online!</h1></span>
                          )
                            else if(server.online !== true)
                          return (
                              <span>Server is Down...</span>
                          )
                          })()
                        }


                  
                        <h4>Server Version: {server.version}</h4>
                        <br />
                  
                  
                  <img className='App-logo' src={server.icon} alt='Icon'></img>

                            <br />
                            <br />

                  <h1>Players Online: {server.players.online}</h1>

                  <div className=''>
                    
                      {
                          (() => {
                              if(server.players.online === 0)
                              return <span></span>
                              if(server.players.online > 0)
                              return <span><h2 className=''>Who is Online?</h2>
                              
                              <ul>
                              {server.players.list.map(item => (
                                  <li key={item.id}>
                                      {item}
                                  </li>
                              ))}
                          </ul></span>
                          })()
                        }
                          
                  </div>
                  </Jumbotron>
              </div>
              
          )
                    
      }
          return(
              <div className=''>
                  <h1>Loading...</h1>
              </div>
          )
}
  

export default MyBodyAPI;
