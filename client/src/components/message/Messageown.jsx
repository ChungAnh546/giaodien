import "./message.css";
import { format } from "timeago.js";

export default function Message() {
  return (
    <div className={ "message own" }>
      <div className="messageTop">
      <p className="messageText">Hi </p>
        <img
          className="messageImg"
          src="https://luv.vn/wp-content/uploads/2021/12/hinh-anh-gai-mat-vuong-xinh-dep-42.jpg"
          alt=""
        />
       
      </div>
      <div className="messageBottom"> now</div>
    </div>
  );
}