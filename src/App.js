import { BrowserRouter as Router } from "react-router-dom";
import Header from 'components/Header';
import Home from 'components/Home';
import Footer  from "components/Footer";


function App() {
  return (
    <Router>
      <Header />
      <div className='wrapper'>
       <Home />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
