import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search,setSearch}) => {
  return (
    <div className='Nav'>
        <form htmlFor='search' className="searchForm" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" id='search' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search Post'/>
        </form>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/NewPost'>Post</Link></li>
            <li><Link to='/About'>About</Link></li>
        </ul>
    </div>
  )
}

export default Nav