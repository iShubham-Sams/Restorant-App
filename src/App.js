import './App.css';
import Header from './Components/Header'
import {Routes,Route} from 'react-router-dom'
import MainContainer from './Components/MainContainer';
import CreateContainer from './Components/CreateContainer';
import {AnimatePresence} from 'framer-motion'
import { useStateValue } from './Components/Context/stateProvider';
import { getAllFoodItems } from './Components/utils/FirebaseFunctions';
import { useEffect } from 'react';
import { actionType } from './Components/Context/reducer';

function App() {
  const [{foodItems},dispatch] =useStateValue();

  const fetchData= async ()=>{
    await getAllFoodItems().then((data)=>{
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems:data

      })
    })
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <AnimatePresence exitBeforeEnter>
    <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header/>
        <main className=' mt-14 md:mt-20 px-4 md:px-16 py-4  w-full'> 
        <Routes>
          <Route path='/*' element={<MainContainer/>}/>
          <Route path='/createItem' element={<CreateContainer/>}/>
        </Routes>
        </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
