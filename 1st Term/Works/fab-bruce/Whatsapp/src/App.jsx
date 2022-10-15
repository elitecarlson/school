import "../src/Assets/css/app.css";
import alex from "../src/Assets/images/dp/alex.jpg"
import elon from "../src/Assets/images/dp/elon.jpg"
import f1memes from "../src/Assets/images/dp/f1memes.jpg"
import goku from "../src/Assets/images/dp/goku.jpg"
import kira from "../src/Assets/images/dp/kira.jpg"
import lewis from "../src/Assets/images/dp/lewis.jpg"
import mkbhd from "../src/Assets/images/dp/mkbhd.jpg"
import spacex from "../src/Assets/images/dp/spacex.jpg"

import seen from "../src/Assets/images/icons/seen.png"
import sent from "../src/Assets/images/icons/sent.png"
function App() {
  return (
    <>
    <div className="App">
      <div className="backdrop">
        <div className="app">
          {/* Bar 1 */}
          <div className="bar1">
            <div className="wordmark">WhatsApp</div>
            <div className="searchAndMenu">
              <div className="search" id="icon"></div>
              <div className="menu" id="icon"></div>
            </div>
          </div>
          {/* Bar 2 */}
          <div className="bar2">
            <div className="camera">
              <div className="cameraIcon"></div>
            </div>
            <div className="navigation">
              <div className="active">
                <p className="linkactive">CHATS</p>
                <div className="notificaion">
                  <p>3</p>
                </div>
              </div>
              <div className="inactive">
                <p className="linkinactive">STATUS </p>
              </div>
              <div className="inactive">CALLS</div>
            </div>
          </div>
          <div className="chat">
            <Message 
              dp={f1memes}
              name="F1 Memes"
              time="14:32PM"
              status=""
              msg="Lmao yall gotta chill"
              totalmsg="23">
            </Message>
            <Message 
              dp={kira}
              name="Kira"
              time="11:08AM"
              status=""
              msg="That's what i was talking about all along"
              totalmsg="4">
            </Message>
            <Message 
              dp={alex}
              name="Alex"
              time="7:21AM"
              status=""
              msg="How are you doing?"
              totalmsg="1">
            </Message>
            <Message 
              dp={goku}
              name="Khalid"
              time="Yesterday"
              status="sent"
              msg="Bro i need the math notes"
              totalmsg="">
            </Message>
            <Message 
              dp={spacex}
              name="Justin"
              time="Yesterday"
              status="seen"
              msg="No worries mate"
              totalmsg="">
            </Message>
            <Message 
              dp={lewis}
              name="Lewis"
              time="Sunday"
              status="seen"
              msg="Amazing race today"
              totalmsg="">
            </Message>
            <Message 
              dp={elon}
              name="Elon"
              time="Thursday"
              status=""
              msg="We are worling on getting starlink in more locations"
              totalmsg="">
            </Message>
            <Message 
              dp={mkbhd}
              name="MKBHD"
              time="Thursday"
              status="seen"
              msg="Always appraciate the support hope to keep making amazing videos"
              totalmsg="">
            </Message>
            <div className="bottombtn">
              <div className="chaticon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
function Message(props){
  var notificaion = "notificaion";
  var time = "time";
  var msgStatus = "msgStatus";
  if (props.status == "sent") {
    var status = sent;
  }else if(props.status == "seen"){
    var status = seen;
  }else{
    var msgStatus = "displayNone"
  }
  
  if (props.totalmsg == "") {
    var notificaion = "displayNone";
    var time = "timeSeen";
  }
  return(
    <div className="card">
      <div className="dp">
        <img src={props.dp} alt="" className="dp" />
      </div>
      <div className="info">
        <div className="topInfo">
          <p className="name">{props.name}</p>
          <p className={time}>{props.time}</p>
        </div>
        <div className="bottomInfo">
          <div className="msg">
            <img src={status} alt="" className= {msgStatus} />
            <p className="msgtxt">{props.msg}</p>
          </div>
          <div className={notificaion}>
            <p>{props.totalmsg}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;