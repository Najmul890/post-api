import React from 'react';
import Post from './components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './components/PostDetails/PostDetails';




function App() {
  return (
    <div>
      
      <Router>
        
        <Switch>
        <Route exact path="/" >
          <Post></Post>
          </Route>
          <Route path="/post/:postId" >
            <PostDetails></PostDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
