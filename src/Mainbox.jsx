import React, { useContext } from 'react'
import './Mainbox.css'
import { FaRegLightbulb, FaCode, FaCircleUser } from "react-icons/fa6";
import { FaUserCircle, FaRegCompass, FaMicrophone } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { BiSolidImageAdd } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import { FcOnlineSupport } from "react-icons/fc";
import { Context } from './contect/Context';
const Mainbox = () => {
  const { onSend, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)
  return (
    <>
      <div className='mainbox'>
        <div className="nav">
          <p>Gannu AI</p>
         <img className='user-logo' src="https://cdn.pixabay.com/photo/2023/02/08/06/29/fashion-7775824_1280.jpg" alt="" />
        </div>
        <div className="mainbox-container">
          {!showResult ?
            <>
              <div className="greet">
                <p><span>Hello, Ganesh</span></p>
                <p>How Can I Halp You Today</p>
              </div>
              <div className='cards'>
                <div className="card">
                  <p>suggest beautiful places to see an upcoming road trips</p>
                  <FaRegCompass className='icon' />
                </div>
                <div className="card">
                  <p> see an upcoming road trips</p>
                  <FaRegLightbulb className='icon' />
                </div>
                <div className="card">
                  <p>beautiful places to see an upcoming road trips</p>
                  <FiMessageCircle className='icon' />
                </div>
                <div className="card">
                  <p>places to see an upcoming road trips</p>
                  <FaCode className='icon' />
                </div>

              </div>
            </>
            : <><div className='result '>
              <div className="result-title">
              <img className='user-logo' src="https://cdn.pixabay.com/photo/2023/02/08/06/29/fashion-7775824_1280.jpg" alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <FcOnlineSupport />
                {loading ? <>
                    <div className="load-container">
                      <div className="blocks b-one"></div>
                      <div className="blocks b-two"></div>
                      <div className="blocks b-three"></div>
                      <div className="blocks b-four"></div>
                      <div className="blocks b-five"></div>
                    </div>
                  </> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
              </div>
            </div></>}

          <div className="mainbox-bottom">
            <div className="search-box">
              <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder='Enter a prompt here' />
              <div className='box-icon'>
                <BiSolidImageAdd className='icon' />
                <FaMicrophone className='icon' />
              <IoMdSend onClick={() => onSend()} className='icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mainbox