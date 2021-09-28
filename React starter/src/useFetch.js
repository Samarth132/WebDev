import { useState, useEffect } from "react";


const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abort = new AbortController();

        console.log('use effect ran');
        fetch(url, {signal: abort.signal})
        .then(res=>{
            if(!res.ok){
                throw Error('Could not fetch resource');
            }
            return res.json();
        })
        .then(data=>{
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err=>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }
            else{
                setError(err.message);
                setIsPending(false);
            }
        });
        return ()=>abort.abort();
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;