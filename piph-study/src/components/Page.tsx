import {Dispatch, SetStateAction, useEffect} from 'react'
import { questionData } from '../assets/options'


interface PageProps {
	index : number;
    setPage:  Dispatch<SetStateAction<number>>;
}

 const Page = ({index, setPage} : PageProps) => {
    useEffect(() => {
        console.log('mounted')

    },[])
    return (
        <>
            <div className="with-frame" aria-hidden={true}>
                <div className="content" aria-hidden={true}>
                    {index === 0 ?
                        <>
                            <h1 className="title" tabIndex={1}>Korva Usability Study</h1>
                            <p tabIndex={2}>Welcome to the study’s testing site! Please wait to click the next button until you are instructed to do so.</p> 
                        </>
                    : null}
                    {index > 0 && index < 8 ?
                    <>
                        <h2 tabIndex={1} className="title">{questionData[index].title}</h2>
                        <div className='img-div'>
                            <img tabIndex={2} src={questionData[index].img} alt={questionData[index].altText} />
                        </div>
                    </>
                    : null}
                    {index === 8 ?
                        <div className="lewis-explore">
                            <iframe src="https://alchemie-lewis2.web.app/index" className="lewis-frame"></iframe>
                        </div>
                    : null}
                     {index === 9 ?
                        <>
                        <h1 className="title" tabIndex={1}>End of Usability Test	</h1>
                        <p tabIndex={2}>Thank you for testing the alt text and drawing tool. You can close this site. For the last part of this study the interviewer will ask you a few questions about your experience. 
</p> 
                    </>
                    : null}
                </div>
                {index > 0 && index < 8 && questionData[index].iframe &&
                    <iframe src="https://alchemie-lewis2--piph-langchain-1-vkixcusy.web.app/" className="frame"></iframe>
                }
            </div>

            <div className="button-block">
                <button type="button" tabIndex={3} style={{display: `${index === 0 || index === 9? "none" : "block"}`}} onClick={()=>{if (index > 0) setPage(index-1)}}>Previous</button>
                <button type="button" tabIndex={4} style={{display: `${index === 9? "none" : "block"}`}} onClick={()=>{if (index < 9) setPage(index+1)}}>Next</button>
            </div>

        </>
    )
}

export default Page;
