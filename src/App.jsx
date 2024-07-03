import { useEffect, useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import Form from './components/Form'
import Phonebook from './components/Phonebook'
import personService from "./services/persons"

function App() {
  
  const [ persons , setPersons ] = useState([])
  const [ newName , setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleFilterChance = (event) => {
    setSearch(event.target.value)
  }

  const filterPersons = persons.filter(person => person.name.toLocaleLowerCase().includes(search.toLowerCase()))
  const personsToShow = (search === '') ? persons : filterPersons

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    const existName = persons.filter(person => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase())
    const existPhone = persons.filter(person => person.number === newPhone)
    
    
    if (existName.length !== 0 & existPhone.length === 0) {
      if (confirm(`${newName} ya existe en la agenda. ¿Deseas actualizar su número al ${newPhone} ?`) === true) {
        const id = existName[0].id
        const person = persons.find( n => n.id === id )
        const changedPerson = { ...person, number: newPhone}

        personService
          .update( id, changedPerson )
          .then( returnedPerson => {
        setPersons( persons.map( person => person.id !== id ? person : returnedPerson ) )
      })
      }
    } 
    else if (existPhone.length !== 0) {
      alert(`${newPhone} ya existe en la agenda.`)
    } else {
      const nameObject = {
        name: newName,
        number: newPhone,
        important: Math.random() < 0.5
      }

      personService
        .create( nameObject )
        .then( returnedPerson => {
          setPersons( persons.concat( returnedPerson ))
          setNewName('')
          setNewPhone('')
        })
    }   
  }

  const toggleImportanceOf = ( id ) => {
    const person = persons.find( n => n.id === id )
    const changedPerson = { ...person, important: !person.important }

    personService
      .update( id, changedPerson )
      .then( returnedPerson => {
        setPersons( persons.map( person => person.id !== id ? person : returnedPerson ) )
      })
  }

  const handleClickDeletePerson = ( id ) => {
    
    personService
      .destroy( id )
      .then( returnedPerson => {
        setPersons( persons.filter(person => person.id !== id ) )
        console.log(returnedPerson)
      })
  }
 
  return (
    <>
      <h1>Agenda Telefónica</h1>

      <h2>Buscar</h2>
      <Filter value={search} action={handleFilterChance} />

      <h2>Agregar contacto</h2>
      <Form 
        newName={newName}
        actionName={handleNameChange}
        newPhone={newPhone}
        actionPhone={handlePhoneChange}
        actionButton={addPerson}
      />

      <h2>Contactos</h2>
      <Phonebook arr={personsToShow} toggleImportanceOf={ toggleImportanceOf } handleClickDeletePerson= { handleClickDeletePerson } />
    </>
  )
}

export default App
