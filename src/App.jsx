import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Welcome from './pages/welcome';
import Login from './pages/login';

function App() {
 

  return (
    <>
        <Router>
        <div className="w-full flex items-center justify-between">
          {/* <ul className="max-w-7xl mx-auto flex items-center gap-x-6">
            <li>
              <Link
                to="/"
                title="Home"
                className="py-4 block px-3 hover:underline transition ease-in-out duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/posts"
                title="Posts"
                className="py-4 px-3 hover:underline transition ease-in-out duration-200"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                to="/posts/create"
                title="New Post"
                className="py-4 px-3 hover:underline transition ease-in-out duration-200"
              >
                New Post
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                title="New Post"
                className="py-4 px-3 hover:underline transition ease-in-out duration-200"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                title="New Post"
                className="py-4 px-3 hover:underline transition ease-in-out duration-200"
              >
                Register
              </Link>
            </li>
          </ul> */}
         
        </div>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/posts">
            <Route index element={<Posts />} />
            <Route path=":id" element={<SinglePost />} />
            <Route path="create" element={<NewPost />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Route> */}
         
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
