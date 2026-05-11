  import React from 'react';
  import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
  import CreatePost from './pages/createpost';
  import Posts from './pages/posts'; 
  import Login from './pages/login';
  import Signup from './pages/signup';
 function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Signup/>}/>
    <Route path="/posts" element={<Posts/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/create-post" element={<CreatePost/>}/>
    </Routes>
    </Router> 
  );
}

export default App;