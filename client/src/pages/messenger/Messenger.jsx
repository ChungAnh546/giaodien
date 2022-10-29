import "./messenger.css";
import { Link } from "react-router-dom";
import Conversation from "../../components/conversations/Conversation";
import Conversationtb from "../../components/conversations/conversationtopbar";
import Message from "../../components/message/Message";
import Messageown from "../../components/message/Messageown";

import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";
import { Search } from "@material-ui/icons";







export default function Messenger() {
 

  return (
    <>
      
      <div className="messenger">
      <div className="chatOnline">
          
          <div className="topBar">
              <div className="divProfile">
              
              <img
                src={
                  "https://luv.vn/wp-content/uploads/2021/12/hinh-anh-gai-mat-vuong-xinh-dep-42.jpg"
                }
                
                className="barImg"
              />
             
              </div>
            
              
                <div className="divimg"><img src="https://cdn-icons-png.flaticon.com/512/919/919904.png" alt="" className="iconleftmenu"/></div>
                <div className="divimg"><img src="https://img.icons8.com/ios/452/call-list.png" alt="" className="iconleftmenu"/></div>
                <div className="divimg"><img src="https://img.icons8.com/ios/452/today.png" alt="" className="iconleftmenu"/></div>
                <div className="divimg"><img src="https://img.icons8.com/ios/452/video-call.png" alt="" className="iconleftmenu"/></div>
          </div>
          <div className="bottomBar">
            <div className="divimg"><img src="https://img.icons8.com/ios/452/business.png" alt="" className="iconleftmenu"/></div>
            <div className="divimg2"><img src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/452/external-setting-essential-element-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png" alt="" className="iconleftmenu"/>
            <ul class="sub-menu">
           
            <li><a href="#">your profile</a></li>
            <li><a href="#">Setting</a></li>
            <li><a href="#">log out</a>
            </li>
            </ul>
            
          </div>
          </div>
        </div>
        
        <div className="chatMenu">
        <div className="chatMenuWrapper2">
          <div className="topMenu">
            <div className="searchbar2">
              <Search className="searchIcon" />
              <input
                placeholder="Search for friend"
                className="chatMenuInput"
              />
            </div>
            
                <img src="https://cdn-icons-png.flaticon.com/512/748/748137.png" className="iconuser" />
                <img src="https://cdn-icons-png.flaticon.com/512/1387/1387940.png" className="icongroup" />
            
          </div>
        </div>
        <div className="menuNhom">
                <div className="all"><a >All</a></div>
                <div className="nhom"><a >Group</a></div>
              
              
        </div>
          <div className="chatMenuWrapper">
         
           
          <Conversation  />
          <Conversation  />
          <Conversation  />
          <Conversation  />
          <Conversation  />
          <Conversation  />
          <Conversation  />
          <Conversation  />
          <Conversation  />
          <Conversation  />
          
          <Conversation  />
          <Conversation  />
          <Conversation  />
          <Conversation  />
          <Conversation  />
          <Conversation  />

             
              
            
            
          </div>
        </div>
        <div className="chatBox">
          <div className="topbarchat">
              
              <Conversationtb  />
            <div className="topbarright">
              <span className="spaceTopBar"></span>
              <span className="spaceTopBar"></span>
              <span className="spaceTopBar"></span>
              <img src="https://cdn-icons-png.flaticon.com/512/1387/1387940.png" className="icongroup" />

              <img src="https://img.icons8.com/material-outlined/344/video-call.png" className="iconcall" />
              <span className="spaceTopBar"></span>
            </div>
             
          </div>
          <div className="chatBoxWrapper">
                
                <div className="chatBoxTop">
                  
                    <div >
                      <Message  />
                      <Messageown  /> 
                      <Messageown  />
                      <Messageown  />
                      <Messageown  />
                      <Messageown  />
                      <Messageown  />
                      <Messageown  />
                      <Messageown  />
                      <Messageown  />
                      <Messageown  />
                    </div>
                 
                </div>
                <div className="chatBoxBottom">
                  <div className="topBarBox">
                  
                  <img src="https://img.icons8.com/laces/344/image-file.png" className="iconsmile" />
                  <img src="https://img.icons8.com/laces/344/archive.png" className="iconsmile" />
                  
                  <img src="https://img.icons8.com/ios/344/call-list.png" className="iconsmile" />
                  <img src="https://img.icons8.com/ios/344/more.png" className="iconsmile" />
                  
                  </div>
                  <div className="inputmess">
                  <input className="chatMessageInput"
                    placeholder="write something..."></input>
                  <img src="https://img.icons8.com/ios/344/smiling.png" className="iconsmile" />
            
                  
                    
                  
                  </div>
                  
                
                </div>
              
           
          </div>
        </div>
        
        
      </div>
    </>
  );
}
