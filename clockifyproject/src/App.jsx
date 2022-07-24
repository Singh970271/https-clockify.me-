
import './App.css';
import Project from './components/Project';
import Report from './ReportPage/Report'
import Header from './components/Header/Header'
import Navbar from './components/Navbar'
import MainRoutes from './Pages/MainRoutes'
function App() {
  return (
    <div >
      {/* <Project/> */}
      {/* <Report/> */}
      <Header/>
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
