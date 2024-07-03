import Contact from "./Contact"

const Phonebook = ({ arr , toggleImportanceOf, handleClickDeletePerson }) => {
    return (
        <ul>
            {arr.map(person => 
                <Contact 
                    key={person.id} 
                    name={person.name} 
                    phone={person.number}
                    important={person.important}
                    toggleImportance={ () => toggleImportanceOf( person.id ) }
                    handleClickDeletePerson={ () => handleClickDeletePerson( person.id ) }
                />
            )}
        </ul>
    )
}

export default Phonebook