import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routers/Routes';

function App() {

  return (
    <div className='w-9/12 mx-auto'>
        <RouterProvider router={router}>

        </RouterProvider>
    </div>
  );
}

export default App;
