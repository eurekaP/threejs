import useStore from "../../helpers/store"
import { useEffect, useState, useRef } from 'react'

const PopupUI1 = (props:any) => {
  const popUpIndex:number = useStore((s) => s.popup)
  const src = "https://bifesbuker.co.id/infogames?a=1&u=anZ6RndQMHhmTW1VVjJVeVQ2cEZ3blhGTUlxZVFlL3FhM0Rra24wWkNzMD07bFlxV0EvVXRwNnlVdENtNFBxNzV6eVVlQTh2bGQxSjRaRzV4YzhRd2UvUT0l4iLa&mode="+props.mode

  const changeShowState = ()=>{
    useStore.setState({ popup: 0 });
  }

  useEffect(() => {
    var phoneFrame = document.getElementById('phoneFrame1');
    phoneFrame?.remove();
    var iframespan = document.getElementById('iframe1');
    var iframe_html = '<iframe id="phoneFrame1" class="w-full h-full ml-2" src="'+ src +'" ></iframe>';
    if(iframespan == null)
      return;
    iframespan.innerHTML = iframe_html;
  });
  return (
    <>
      <div 
        className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-80 "
        style={{display:popUpIndex===1?'block':'none', zIndex:2000000000}}
      >
        <div className="flex justify-center items-center w-screen h-screen">
          <div
            className="relative bg-gradient-to-b from-[#ea5b0c] to-[#f5a155] rounded-sm w-[95%] h-[90%] mx-auto p-1 flex"
          >
            <button 
              className="text-white text-center text-[18px] rounded-full bg-black bg-opacity-70 w-[30px] h-[30px]"
              onClick={()=>changeShowState()}
            >
              X
            </button>
            <span id="iframe1" className="w-full h-full ml-2" style={{marginRight: '10px'}}>
              <iframe id="phoneFrame1" className="w-full h-full ml-2"
              src={src}>
              </iframe>
            </span>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default PopupUI1