import React from 'react';
import './App.css';
import GetAllUsers from './Components/Users';
import {Routes, Route} from 'react-router-dom'
import CreateUser from './Components/CreateUser';
import DetailUser from './Components/DetailUser';
import Posts from './Components/Posts';
import CreatePost from './Components/CreatePost';
import DetailPost from './Components/DetailPost';
import UpdateUser from './Components/UpdateUser';
import UpdatePost from './Components/UpdatePost';
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<GetAllUsers />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/detail-user/:userId" element={<DetailUser />} />
          <Route path="/update-user/:userId" element={<UpdateUser />} />

          <Route path="/post" element={<Posts />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/detail-post/:postId" element={<DetailPost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />


        </Routes>
      </div>
    </>
  );
}

export default App;