import React from 'react';
import PostList from './view/postList/PostList';
import './App.css';
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="PostList">
      <div style={{display: "flex"}}>
        <PostList />
      </div>
    </div>
  );
}

export default App;
