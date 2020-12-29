import './App.css';
import MyHeader from './MyHeader.js';
import MyBodyAPI from './MyBodyAPI.js';
import MyFooter from './MyFooter.js';
import DynamicMap from './DynamicMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, } from 'react-bootstrap';

function App() {
  return (
    <div className='text-center'> 
      <MyHeader />

      

      <Container fluid='xs'>
      
      <MyBodyAPI />
      
      <DynamicMap />
    
      </Container>

      

      <MyFooter />
      
    </div>
  );
}

export default App;
