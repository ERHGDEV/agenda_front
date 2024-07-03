const Contact = ({ name, phone, important, toggleImportance, handleClickDeletePerson }) => {
    const label = important ? 'Importante' : 'No importante '

    return (
        <li>
            <span>
                { name }    
            </span> <br></br> { phone } <br></br>
            <button onClick={ toggleImportance } > { label } </button>
            <button 
                style={{ color: 'red' }}
                onClick={ handleClickDeletePerson }   
            >Eliminar</button>
        </li>
    )
}

export default Contact