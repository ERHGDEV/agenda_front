const Contact = ({ name, phone, important, toggleImportance, handleClickDeletePerson }) => {
    const label = important ? 'Importante' : 'No importante '

    return (
        <li>
            { name } { phone }
            <button onClick={ toggleImportance } > { label } </button>
            <button onClick={ handleClickDeletePerson }>Eliminar</button>
        </li>
    )
}

export default Contact