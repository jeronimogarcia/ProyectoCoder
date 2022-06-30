import { useState, useEffect } from "react"

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateMobile = () =>{
      if(  document.body.clientWidth < 480 ) {
        setIsMobile(true)
      }
      else {
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