import './styles/App.css'
import InputSection from './components/inputSection'
import OutputSection from './components/outputSection'
import { useState } from 'react'

function App() {
  // general
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState(null)

  //education
  const [school, setSchool] = useState('')
  const [program, setProgram] = useState('')

  //experience
  const [compName, setCompName] = useState('')
  const [position, setPosition] = useState('')
  const [resp, setResp] = useState('')
  const [startDate, setstartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const [descript, setDescript] = useState('')


  return (
    <>
      <h1>Generate Your CV in style</h1>
      <div className="flex">
        <InputSection 
          name={name} setName={setName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} 
          tel={tel} setTel={setTel} school={school} setSchool={setSchool} program={program} setProgram={setProgram}
          compName={compName} setCompName={setCompName} position={position} setPosition={setPosition}
          resp={resp} setResp={setResp} startDate={startDate} setstartDate={setstartDate} endDate={endDate} setEndDate={setEndDate} descript={descript} setDescript={setDescript}

        />
        <OutputSection 
          name={name} lastName={lastName} email={email} tel={tel} school={school} program={program} 
          compName={compName} position={position} resp={resp} startDate={startDate} endDate={endDate} descript={descript}
        />
      </div>
    </>
  )
}

export default App
