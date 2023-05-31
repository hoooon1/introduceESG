import './App.css';
import { ScrollToTop } from './components/scroll/ScrollToTop';
import { BrowserRouter , Routes, Route, Switch, Link } from 'react-router-dom';
import Introduce from './Introduce';
import Result from './Result';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/Result" element={<Result />} />
       </Routes>
    </>
  );
}

export default App;
