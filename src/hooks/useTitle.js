import { useEffect } from "react"

const useTitle = title => {
  useEffect(()=>{
    document.title = `${title} -Swift Delivery`;
  },[title])
}

export default useTitle;