import { useEffect } from "react";
const useTitle = (title) => {
    useEffect(()=>{
      document.title=`${title}-Blog`
    },[title])
      return null
  };

export default useTitle
