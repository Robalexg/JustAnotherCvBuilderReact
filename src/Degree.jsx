import './css/Degree.css'


const Degree = ({degree,onDelete}) => {
    const {title,school,yearCompleted} = degree
    return (
        <div className='degree'>
            <div>
                <h2>{title}</h2>
                <button id={degree.id} name='degree' onClick={onDelete}>X</button>
            </div>
            <p>{school}</p>
            <p>{yearCompleted}</p>
        </div>
        )
}


export {Degree}