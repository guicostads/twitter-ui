import twitterlogo from '../assets/logo-twitter.svg'
import { House, Hash, BellSimple, Envelope, Bookmark, List, User, DotsThreeCircle, Sparkle, Pencil } from 'phosphor-react'
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <aside className='sidebar'>
        <img className='logo' src={twitterlogo} alt='logo' />
        <nav className='main-nav'>
          <NavLink to='/'>
            <House weight='fill' />
            <span>Home</span></NavLink>
          <a href=''>
            <Hash />
            <span>Explore</span></a>
          <a href=''>
            <BellSimple />
            <span>Notifications</span></a>
          <a href=''>
            <Envelope />
            <span>Messages</span></a>
          <a href=''>
            <Bookmark />
            <span>Bookmarks</span></a>
          <a href=''>
            <List />
            <span>Lists</span></a>
          <a href=''>
            <User />
            <span>Profile</span></a>
          <a href=''>
            <DotsThreeCircle />
            <span>More</span></a>
        </nav>
        <button className='new-tweet' type='button'>
          <Pencil />
          <span>Tweet</span></button>
      </aside>
    </div>
  )
}

export default Sidebar