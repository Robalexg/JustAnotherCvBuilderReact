import './css/Sidebar.css'


const Sidebar = ({eventHandler, handleSubmit, expHandler,expErrorMessage,eduHandler,eduErrorMessage,handleAboutMe}) => {

    return (
        <div className='sidebar'>
            <div className='personal'>  
                <h1>Personal Info</h1>
                {/* //name */}
                <input 
                    onChange={(e) => {eventHandler(e.target)}} 
                    placeholder='Full Name' 
                    name='name' 
                    type="text" 
                />

                {/* email */}
                <input 
                    onChange={(e) => {eventHandler(e.target)}} 
                    placeholder='Email' 
                    name='email' 
                    type="text" 
                />

                {/* phone number */}
                <input 
                    onChange={(e) => {eventHandler(e.target)}} 
                    placeholder='Phone Number' 
                    name='phone' 
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    maxLength={10}
                />
            </div>

            <div className='experience'>
                <h1>Experience (Max 3)</h1>
                
                <form name='exp' onSubmit={(e) => {handleSubmit(e)}} action="">
                    <input 
                        onChange={(e) => {expHandler(e.target)}} 
                        placeholder='Job Title' 
                        name='jobTitle' 
                        type="text" 
                        required
                    />

                    <input 
                        onChange={(e) => {expHandler(e.target)}} 
                        placeholder='Start & End Date' 
                        name='years' 
                        type="text" 
                        required
                    />
                    <input 
                        onChange={(e) => {expHandler(e.target)}} 
                        placeholder='Employer' 
                        name='employer' 
                        type="text" 
                        required
                    />
                    <textarea 
                        onChange={(e) => {expHandler(e.target)}} 
                        placeholder='Job Description' 
                        name='jobDescription' 
                        type="text" 
                        required
                />
                <div>
                    <button >Submit</button>
                    <p id='error'>{expErrorMessage}</p>
                </div>
                </form>
            </div>

            <div className='education'>
                <h1>Education (Max 3)</h1>

                <form name='edu' onSubmit={(e) => {handleSubmit(e)}} action="">
                    <input 
                        onChange={(e) => {eduHandler(e.target)}} 
                        placeholder='Degree/Certificate' 
                        name='title' 
                        type="text" 
                        required
                    />

                    <input 
                        onChange={(e) => {eduHandler(e.target)}} 
                        placeholder='School Name' 
                        name='school' 
                        type="text" 
                        required
                    />
                    <input 
                        onChange={(e) => {eduHandler(e.target)}} 
                        placeholder='Year Completed' 
                        name='yearCompleted' 
                        type="text" 
                        required
                    />
                <div>
                    <button >Submit</button>
                    <p id='error'>{eduErrorMessage}</p>
                </div>
                </form>
            </div>  
            
            <div className='aboutMe'>
                <h1>About you</h1>
                <textarea onChange={(e) => handleAboutMe(e)} name="" id=""></textarea>
            </div>
        
        </div>
    )
}


export {Sidebar}