import React, { useContext, useState } from 'react'
import './sidebar.css'
import { IoMdMenu } from "react-icons/io";
import { CiCirclePlus, CiCircleQuestion, CiSettings } from "react-icons/ci";
import { TiMessage } from "react-icons/ti";
import { MdHistory } from "react-icons/md";
import { Context } from './contect/Context';
function Sidebar() {
  const [extended, setExtended] = useState(false)
  const { onSend, prevPrompts, setRecentPrompt,newChat } = useContext(Context);
  const loadprompt=async(prompt)=>{
    setRecentPrompt(prompt)
    await onSend(prompt)
  }
    return (
    <>
      <div className='sidebar'>
        <div className='top'>
          <IoMdMenu onClick={() => setExtended(prev => !prev)} className='menu icon' />
          <div onClick={()=>newChat()} className='new-chat'>
            <CiCirclePlus className='icon' />
            {extended ? <p>New Chat</p> : null}
          </div>
          {extended ?
            <div className="recent">
              <p className='recent-title'>Recent</p>
              {prevPrompts.map((item, index) => {
                return (
                  <>
                  <div onClick={()=>loadprompt(item)} className="recent-entry">
                    <TiMessage  className='icon' />
                    <p>{item.slice(0,18)}...</p>
                  </div> 
                  </>
                )
              })}
            </div>
            : null}
        </div>
        <div className='bottom'>
          <div className="bottom-item recent-entry">
            <CiCircleQuestion className='icon' />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <MdHistory className='icon' />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <CiSettings className='icon' />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar