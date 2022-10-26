import "./messenger.css";
import { Link } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
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
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      
      <div className="messenger">
      <div className="chatOnline">
          <div className="chatOnlineWrapper">
          <div className="topbarLeft">
          <Link to={`/profile/${user.username}`}>
          <img
            src={
              "https://luv.vn/wp-content/uploads/2021/12/hinh-anh-gai-mat-vuong-xinh-dep-42.jpg"
            }
            alt=""
            className="topbarImg"
          />
          </Link>
        
          </div>
            <div className="divimg"><img src="https://cdn-icons-png.flaticon.com/512/919/919904.png" alt="" className="iconleftmenu"/></div>
            <div className="divimg"><img src="https://img.icons8.com/ios/452/call-list.png" alt="" className="iconleftmenu"/></div>
            <div className="divimg"><img src="https://img.icons8.com/ios/452/today.png" alt="" className="iconleftmenu"/></div>
            <div className="divimg"><img src="https://img.icons8.com/ios/452/video-call.png" alt="" className="iconleftmenu"/></div>
            <div className="spacemenuleft"></div>
            <div className="divimg"><img src="https://img.icons8.com/ios/452/business.png" alt="" className="iconleftmenu"/></div>
            <div className="divimg"><img src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/452/external-setting-essential-element-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png" alt="" className="iconleftmenu"/></div>
            
          </div>
        </div>
        
        <div className="chatMenu">
        <div className="chatMenuWrapper2">
        <div className="searchbar2">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="chatMenuInput"
          />
        </div>
        <div className="topbarIconItem">
            <img src="https://cdn-icons-png.flaticon.com/512/748/748137.png" className="iconuser" />
            
          </div>
          <div className="topbarIconItem">
            <img src="https://cdn-icons-png.flaticon.com/512/1387/1387940.png" className="icongroup" />
            
          </div>
        </div>
        <div className="menuNhom"><p className="nhom">All</p><p className="nhom">Group</p></div>
          <div className="chatMenuWrapper">
         
           
            
              <div className="conversation" >
                <Conversation  />
                
                
                
              </div>
              <div className="conversation" >
                <Conversation  />
                
                
                
              </div>
              <div className="conversation" >
                <Conversation  />
                
                
                
              </div>
              
            
            
          </div>
        </div>
        <div className="chatBox">
          <div className="topbarchat">
              <div className="conversation" >
                <Conversationtb  />
                
                
                
              </div>
              <div className="topbarIconItem">
              <img src="https://cdn-icons-png.flaticon.com/512/1387/1387940.png" className="icongroup" />
            
              </div>
              <div className="topbarIconItem">
              <img src="https://img.icons8.com/material-outlined/344/video-call.png" className="iconcall" />
            
              </div>
          </div>
          <div className="chatBoxWrapper">
                
                <div className="chatBoxTop">
                  
                    <div >
                      <Message  />
                      <Messageown  />
                    </div>
                 
                </div>
                <div className="chatBoxBottom">
                  <div className="inputmess">
                  <div className="topbarIconItem">
                  <img src="https://img.icons8.com/ios/344/smiling.png" className="iconsmile" />
            
                  </div>
                    <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    
                    value={newMessage}
                  ></textarea>
                  </div>
                  
                  <button className="chatSubmitButton" >
                    Send
                  </button>
                </div>
              
           
          </div>
        </div>
        
      </div>
    </>
  );
}
