import React from "react";
import { useState, useEffect,useRef } from "react";
import { Icon } from '@iconify/react';
import Logo from "../svgs/logo.svg";
import Mail from "../svgs/mail.svg";
import Calendar from "../svgs/calendar.svg";
import Task from "../svgs/task.svg";
import Note from "../svgs/notes.svg";
import Contact from "../svgs/contact.svg";
import Bookmark from "../svgs/bookmarks.svg";
import Drag from '../svgs/drag.svg'
import Stream from '../images/streams-icon.png'
const Siderbar = () => {
  const [dropdown, setDropdown] = useState(false)
  const [stream, setStream] = useState(true)
  const [folders, setFolders] = useState(true)
  const [views, setViews] =useState(true)
  let dropRef = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if(!dropRef.current.contains(e.target)){
        setDropdown(false)
      }
    });
    return () => {
      document.removeEventListener('mousedown', (e) => {
        if(!dropRef.current.contains(e.target)){
          setDropdown(false)
        }
      })
    }
  })

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={Logo} className="logo-img" />

        <span className="logo-name">Mail</span>
      </div>
      <div className="flex">
        <div className=" side-logo">
          <ul className="">
            <li>
            
              <img src={Mail} className="icon" /> <p>Mail</p>{" "}
            </li>
            <li>
            
              <img src={Calendar} className="icon icon-2" /> <p> Calendar</p>{" "}
            </li>
            <li>
      
              <img src={Task} className="icon icon-3" /> <p> Task</p>{" "}
            </li>
            <li>
         
              <img src={Note} className="icon icon-4" /> <p> Note</p>{" "}
            </li>
            <li>
           
              <img src={Contact} className="icon icon-5" /> <p> Contact</p>{" "}
            </li>
            <li>
             
              <img src={Bookmark} className="icon icon-5" /> <p> Bookmark</p>{" "}
            </li>
          </ul>
        </div>
        <div ref={dropRef} className="side-navs">
          <div className=" flex new-mail">
            <button type="button" className="button-1">
            <span className="mail-text">New Mail</span>
            </button>
            <button className="button-2"
            onClick={()=> dropdown === false?setDropdown (true) : setDropdown(false)
            }
            >
           <span> <Icon icon="ri:arrow-drop-down-line" className="button-icon" /> </span>
            </button>
          </div>
          {dropdown &&
      
          <div className="dropdown-content absolute"> 
         <ul>
          <li className="flex text-black"><Icon icon="arcticons:note-it" className="dropdown-icon"/> <p>New Note</p>
          </li>
          <li className="flex text-black"><Icon icon="fluent:clipboard-task-20-regular" className="dropdown-icon"/> <p>New Task</p>
          </li>
          <li className="flex text-black"><Icon icon="material-symbols:event-note-outline" className="dropdown-icon"/> <p>New Event</p>
          </li>
          <li className="flex text-black"> <Icon icon="bxs:contact" className="dropdown-icon"/> <p>New Contact</p>
          </li>
          <li className="flex text-black"> <Icon icon="bx:book-bookmark" className="dropdown-icon"/> <p>New Bookmark</p>
          </li>
         </ul>

        </div>
}
      <div className="flex mail-title justify-between" 
      
      onClick={() => stream === true? setStream(false): setStream(true)}
      
      ><p className="flex stream"><img src={Drag} className="hidden" />   Streams</p>  <img src={Stream} style={{}}/> </div>
      
      {stream &&

      <div className="mailsub-content">
        <ul>
          <li>Home</li>
          <li>All unread</li>
        </ul>
      </div> }
      <div className="flex mail-title justify-between" 
      
      onClick={() => folders === true? setFolders(false): setFolders(true)}
      
      ><p className="flex stream"><img src={Drag} className="hidden" />   Folders</p>  <img src={Stream} style={{}}/> </div>
      
      {folders &&

      <div className="mailsub-content">
        <ul>
          <li>Inbox</li>
          <li>Draft</li>
          <li>Templaates</li>
          <li>Snoozed</li>
          <li>Sent</li>
          <li>Spam</li>
          <li>Trash</li>
          <li>Outbox</li>
          <li>Newsletter</li>
        </ul>
      </div> }
      <div className="flex mail-title justify-between" > Tags</div>
      <div className="flex mail-title justify-between" 
      
      onClick={() => views === true? setViews(false): setViews(true)}
      
      ><p className="flex stream"><img src={Drag} className="hidden" />  Views</p>  <img src={Stream} style={{}}/> </div>

{views &&

<div className="mailsub-content">
  <ul>
    <li>Unread</li>
    <li>All messages</li>
    <li>Flagged</li>
    <li>All archive</li>
  </ul>
</div> }
        </div>
       
      </div>
    </div>
  );
};

export default Siderbar;
