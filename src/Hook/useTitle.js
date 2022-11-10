import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Within Mind`;
    }, [title])
};

export default useTitle;