import "./message.css";
import { format } from "timeago.js";

export default function Message() {
  return (
    <div className={ "message" }>
      <div className="messageTop">
      
        <img
          className="messageImg2"
          src="https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg"
          alt=""
        />
       <p className="messageText">Hello</p>
      </div>
      <div className="messageBottom"> now</div>
    </div>
  );
}
