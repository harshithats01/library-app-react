import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import ViewAll from './components/ViewAll';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBook/>}/>
      <Route path='/search' element={<SearchBook/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/view' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
