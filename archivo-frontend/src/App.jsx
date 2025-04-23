import React from 'react'
import EstanteriaList from './components/EstanteriaList'

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Archivo Documental</h1>
      <EstanteriaList />
      <CajaForm />
    </div>
  )
}

export default App
