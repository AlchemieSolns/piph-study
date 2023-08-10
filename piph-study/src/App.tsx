import {useEffect, useState} from 'react'
import './App.css'
import Page from './components/Page'

function App() {
    const [page, setPage] = useState(0);
    useEffect(() => {
        window.scrollTo(0,0)
    },[page])

    return (
        <div className='main'>
            {page === 0 && <Page index={0} setPage={setPage}/> }
            {page === 1 && <Page index={1} setPage={setPage}/> }
            {page === 2 && <Page index={2} setPage={setPage}/> }
            {page === 3 && <Page index={3} setPage={setPage}/> }
            {page === 4 && <Page index={4} setPage={setPage}/> }
            {page === 5 && <Page index={5} setPage={setPage}/> }
            {page === 6 && <Page index={6} setPage={setPage}/> }
            {page === 7 && <Page index={7} setPage={setPage}/> }
            {page === 8 && <Page index={8} setPage={setPage}/> }
            {page === 9 && <Page index={9} setPage={setPage}/> }
            
        </div>
    )
}

export default App
