import { useEffect } from "react"


// custom hook for dynamic title 
const useTitle = title => {
  useEffect(()=>{
    document.title = `${title} -Swift Delivery`;
  },[title])
}

export default useTitle;