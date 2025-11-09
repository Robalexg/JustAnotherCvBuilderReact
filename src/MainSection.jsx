import { Sidebar } from "./Sidebar"
import { Preview } from "./Preview"
import React, { useState } from "react";
import './css/MainSection.css'


const MainSection = () => {

    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'JohnDoe@info.com',
        phone: '2813308004',
        jobs: [{
            jobTitle: "Happy Cat",
            years: "2024- 2025",
            employer: 'The Julius Farm',
            jobDescription: "I was dealing with cats and handle 3000 of diffrent breeds",
            id:crypto.randomUUID()
        }],
        degrees: [{
            title: 'Computer Science',
            school: 'Lonestar College',
            yearCompleted: "2024",
            id:crypto.randomUUID()
        }],
        aboutMe: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus aspernatur necessitatibus iste, earum aliquid mollitia architecto et odio, rerum neque nam amet! Aut, est dolore error officiis iusto voluptatem recusandae. Officia, nulla. Libero dolorum, ducimus facere itaque recusandae laudantium in?'
    })
    const [expForm, setExpForm] = useState({})
    const [eduForm, setEduForm] = useState({})
    const [expErrorMessage,setExpErrorMessage] = useState("")
    const [eduErrorMessage,setEduErrorMessage] = useState("")

    const eventHandler = (target) => {
        const {name,value} = target
        setUser({
            ...user,
            [name]: value
        })
    }

    const expHandler = (target) => {
        const {name,value} = target
        setExpForm({
            ...expForm,
            [name]: value,
            id:crypto.randomUUID()
        })
    }

    const eduHandler = (target) => {
        const {name,value} = target
        setEduForm({
            ...eduForm,
            [name]: value,
            id:crypto.randomUUID()
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name
        
        if(name === 'exp'){
            if(user.jobs.length >= 3){
                setExpErrorMessage('Max Experience Entered')
            }else{
                setExpErrorMessage('')
    
                setUser({
                    ...user,
                    jobs: [...user.jobs,expForm]
                })
                e.target.reset()
                setExpForm({})
            }
        }else if(name ==='edu'){
            if(user.degrees.length >= 3){
                setEduErrorMessage('Max Education Entered')
            }else{
                setEduErrorMessage('')
    
                setUser({
                    ...user,
                    degrees: [...user.degrees,eduForm]
                })
                e.target.reset()
                setExpForm({})
            }
        }

        
    }

    const onDelete = (e) => {
        if(e.target.name === 'job'){
            let copy = [...user.jobs].filter(job => e.target.id !== job.id)

            setUser({
                ...user,
                jobs:copy
            })
        }else if(e.target.name === 'degree'){
            let copy = [...user.degrees].filter(degree => e.target.id !== degree.id)

            setUser({
                ...user,
                degrees:copy
            })
        }   
    }

    const handleAboutMe = (e) => {
        setUser({
            ...user,
            aboutMe:e.target.value
        })
    }

     return (
        <div className="mainSection">
            <Sidebar 
                handleSubmit={handleSubmit} 
                eventHandler={eventHandler} 
                expHandler= {expHandler}
                expErrorMessage = {expErrorMessage}
                eduHandler= {eduHandler}
                eduErrorMessage={eduErrorMessage}
                handleAboutMe= {handleAboutMe}
            />
            <Preview  
                user={user}
                onDelete={onDelete}

            />
        </div>
    )
}


export {MainSection}