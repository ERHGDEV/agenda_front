const Filter = ({ value, action }) => {
    return (
        <form>
            <label>Nombre del contacto: </label>
            <input
                value={value} 
                onChange={action}
            ></input>
        </form>
    )
}

export default Filter