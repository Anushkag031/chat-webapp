import React from 'react'
import user from "../img/user.png"
const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find an user' />
      </div>
      <div className="userchat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>ABC</span>
        </div>
      </div>
    </div>
  )
}

export default Search
