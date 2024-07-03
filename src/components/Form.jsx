const Form = ( props ) => {
    return (
        <form>
            <div>
                <label>Nombre: </label>
                <input
                    value={props.newName}
                    onChange={props.actionName}
                />
            </div>

            <div>
                <label>Teléfono: </label>
                <input
                    value={props.newPhone}
                    onChange={props.actionPhone}
                />
            </div>

            <div>
                <button onClick={props.actionButton} type="submit" >
                    Agregar
                </button>
            </div>
        </form>
    )
}

export default Form