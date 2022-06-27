import { useState, useEffect } from "react"

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateMobile = () =>{
      if(  document.body.clientWidth < 480 ) {
        console.log("Mobile");
        setIsMobile(true)
      }
      else {
        console.log("Desktop");
        setIsMobile(false)
      }
    }
    window.addEventListener('load', updateMobile)
    window.addEventListener('resize', updateMobile)
    return () => {
      window.removeEventListener('load', updateMobile)
      window.addEventListener('resize', updateMobile)
                  }
  }
  , [isMobile])

  return isMobile
}

export default useMobile