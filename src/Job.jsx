import './css/Job.css'


const Job = ({job,onDelete}) => {
    const {jobTitle,jobDescription,employer,years,id} = job
    return (
        <div className='job'>
            <div>  
                <h1>{jobTitle}</h1>
                <button name='job' id={id} onClick={(e) => onDelete(e)}>X</button>
            </div>
            <p>{years}</p>
            <p>{employer}</p>
            <p>{jobDescription}</p>
        </div>
    )
}


export {Job}