import './App.css'

function Welcome(prop) {
  return <h1>Hello, {prop.name}</h1>;
}

const error_val = false;
const props = {
  id: 'input',
  type: 'text',
  maxLength: 6
}

function App() {

  return (

    <>
    <Welcome name="Kannan"></Welcome>

    <h1>{error_val ? 'Error Happened' : 'Success'}</h1>

    <label htmlFor='input'>Input: </label>

    <input {...props} placeholder='Kannan'/>
    </>
      
  )
}

export default App
