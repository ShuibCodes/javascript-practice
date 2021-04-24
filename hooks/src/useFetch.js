import {useState, useEffect} from 'react'

export const useFetch = (url) =>{
    const [state, setState] = useState({data: null, loading: true})

        useEffect(() => {
            setState({data:null, loading:true})
                fetch(url).then(x => x.text())
                    .then(
                        res => {
                            setState({data:res, loading: false})
                        }  
                        
                    )

        }, [url])

        return state
}