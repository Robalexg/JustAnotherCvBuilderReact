import './css/Preview.css'
import { Degree } from './Degree'
import { Job } from './Job'

const Preview = ({user,onDelete}) => {


     const formatPhone = (num) => {
        let final = ''

        for(let i = 0; i < num.length; i++){
            if(i === 3){
            final = final + '-' + num[i]
                
            }else if(i === 6){
            final = final + '-' + num[i]

            }else{
            final = final + num[i]
            }
        }

        return final
    }



    return (
        <div className="preview">
            <div className='resume'>
                <div className='header'>
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                    <h2>{formatPhone(user.phone)}</h2>
                </div>
                <div className='exp'>
                    <h1><u>Experience</u></h1>
                    {
                        user.jobs.map((job) => 
                        <Job  
                            job={job}
                            onDelete={onDelete}
                            key={job.id}
                        />)
                    }
                </div>
                <div className='edu'>
                    <h1><u>Education</u></h1>
                    {
                        user.degrees.map(degree =>
                            <Degree 
                                degree={degree}
                                onDelete={onDelete}
                                key={degree.id}
                                onDelete={onDelete}
                            />
                        )
                    }

                </div>
                <div className='about-me'>
                    <h1><u>About me</u></h1>
                    <p>{user.aboutMe}</p>
                </div>
            </div>
        </div>
    )
}


export {Preview}