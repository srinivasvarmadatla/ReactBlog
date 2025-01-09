import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import NewPost from './components/NewPost';
import Error from './components/Error';
import Postpage from './components/Postpage';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])

  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')


  const handleDelete=(id)=>{
    const newPosts=posts.filter((post)=>post.id.toString()!==id.toString())
    setPosts(newPosts)
  }

  const handleSubmit=()=>{
    const id=posts.length?posts[posts.length-1].id+1:1
    const date=new Date();
    const year=date.getFullYear()
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.toLocaleString('default', { weekday: 'long' });
    const dateno=date.getDate()
    const datetime=`${day}, ${dateno} ${month}, ${year}`

    const newpost={id,title,datetime,body}

    setPosts([...posts,newpost])
  }

  useEffect(()=>{
    const filtered=posts.filter((post)=>(
      post.body.toLowerCase().includes(search.toLowerCase()) ||
      post.title.toLowerCase().includes(search.toLowerCase())
    ))
    setSearchResult(filtered.reverse())
  },[posts,search])


  return (
    <Router>
      <div className="App">
        <Header title="ReactJs BLOG" />
        <Nav search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home posts={searchResult}/>} />
          <Route path="/NewPost" element={<NewPost handleSubmit={handleSubmit} title={title} setTitle={setTitle} body={body} setBody={setBody}/>} />
          <Route path="/Postpage/:id" element={<Postpage posts={posts} handleDelete={handleDelete}/>} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
