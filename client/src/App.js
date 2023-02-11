import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { signInWithGoogle } from "./Firebase";

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
  
import Home from './pages'
import About from './pages/about';
// import JobPortal from './pages/jobportal';

function App(){

  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/about' element={<About />} />
    //     {/* <Route path='./jobportal' element={<JobPortal/>} /> */}
    //   </Routes>
    // </Router>
    <div className="App">
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />
    </div>
  );
}

 export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

