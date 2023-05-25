import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=> {
        document.title = `${title} | Princess Palette`;
    }, [title])
};
export default useTitle