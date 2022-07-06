import './App.css';
import Header from './Components/Header'
import {Routes,Route} from 'react-router-dom'
import MainContainer from './Components/MainContainer';
import CreateContainer from './Components/CreateContainer';

function App() {
  return (
    <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header/>
        <main className='mt-24 p-8  w-full'> 
        <Routes>
          <Route path='/*' element={<MainContainer/>}/>
          <Route path='/createItem' element={<CreateContainer/>}/>
        </Routes>
        </main>
    </div>
  );
}

export default App;
