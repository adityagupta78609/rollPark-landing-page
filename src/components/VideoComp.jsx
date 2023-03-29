import React, { useState } from "react";
import intro from "../assets/videos/intro.mp4";
// import NavbarRoll from "./NavbarRoll";
import NavbarTail from "./NavbarTail";
import './VideoComp.css'
const VideoComp = () => {


const [isPaused , setIsPaused] = useState("false")
const videoObj = document.querySelector(".video-short")
const videoObjContainer = document.querySelector(".video-short-container")

const body = document.querySelector("body")
const partition2 = document.querySelector(".partition2")
const partition3 = document.querySelector(".partition3")
const dataList = ["municipalities","universities","automanufacturers","airports","special events"]
body.style.overflowX="hidden"





const pauseVid = (isPaused) =>{
  if(isPaused == 'true'){
    // videoObj.play();
    setIsPaused("false")
    videoObjContainer.style.top = "-50px"
    videoObjContainer.style.zIndex = "0"
    partition2.style.display = "block"
    partition3.style.display = "block"
    videoObj.muted = true;
    body.style.height ="auto"
    body.style.overflow = "auto"
  }else{
    videoObj.muted = false;
    setIsPaused("true")
    body.style.height ="100vh"
    body.style.overflow = "hidden"
    videoObjContainer.style.zIndex = "6"
    partition2.style.display = "none"
    partition3.style.display = "none"
  }
}


// observer for navroll
// const objOptions={}
// const videoObjContainerObserver = new IntersectionObserver(
//   (entries,videoObjContainerObserver)=>{
// entries.forEach(entry =>{
//   if(!entry.isIntersecting){
//     myStyle1.classList.add("style1");
//   }else{
//     myStyle1.classList.add("style1");

//   }
// })
// },objOptions);

// videoObjContainerObserver.observe(videoObj)


  return (
    <div 
    style={{
      "minHeight":"850px",
      // "width":"100vw"
    }}
    >
      <div className="video-short-container" style={{
        position: "absolute",
        top: "-50px",
        "overflow":"hidden",
        // "width":"100vw"
        // minHeight:"80vh"
          }}>
        <video
          
          poster="https://rollpark.us/wp-content/uploads/2018/10/hero-image.jpg"
          data-autoplay=""
          className="video-short"
          autoPlay={true}
          muted={true}
          playsInline={true}
          loop={true}
          // height="700px" 
          
          >
          <source src={intro} type="video/mp4" />
        </video>
      </div>
          {/* <NavbarRoll></NavbarRoll> */}
          <NavbarTail/>
      
      
      {/* <VideoText></VideoText> */}


      {/* video text */}

      <div className="bg-transparent" style={{
      "color":"white",
      "zIndex":"7",
      "position":"relative",
      "top":"min(200px,50vh)",
      "left":"min(10vw,200px)"
        }}>
        <button onClick={() => {pauseVid(isPaused)
        
        }}>
      <div className="partition1 bg-transparent border-2 flex justify-center p-4 border-green-600 hover:bg-green-600 transition-all duration-1000  " style={{"borderRadius":"50%"}}>

        {/* play button */}
        
          { isPaused=='false' ? <i className="fa-solid fa-play " /> :<i className="fa-solid fa-pause " />  }
      </div>
          </button>
          <br/>
          <br/>
      <div className="partition2">
        <div className="text-5xl p-2">
        COMMERCIAL PARKING
        </div>
        <div className="flex">
        <span className="text-4xl p-2" style={{
          "fontFamily":`'Alkatra', cursive`,
          "fontStyle":"italic"
        }}>for </span>
        
        <div 
        className="h-12"
        style={{
          "overflow":"hidden"
        }}>
          

        {
          dataList.map((data)=>(
            
            
          <div
          className= "showData text-4xl p-2" 
          id={data}
          style={{
            "fontFamily":`'Alkatra', cursive`,
            "fontStyle":"italic",
            "position":"relative"
            // "display":"none"
          }}>{data}</div>
          )
          )
        }
        </div>
        
        </div>
      </div>
      <div className="partition3 text-2xl">Not Asphalt. Not Gravel.
       <abbr className="text-green-600 " title="rollable permiable paving surface.
       Durable and environmentally-friendly" style={{
        "textDecoration":"none"
       }}>
       &nbsp;Geotextile.<span className=" rounded-3xl text-sm text-black bg-green-600 " style={{
        "paddingLeft":"0.4rem",
        "paddingRight":"0.4rem",
        
       }}>?</span>
        </abbr></div>
    </div>

    </div>
  );
};

export default VideoComp;
