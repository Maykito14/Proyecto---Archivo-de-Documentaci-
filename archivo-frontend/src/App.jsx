import React from 'react'
import EstanteriaList from './components/EstanteriaList'
import MovimientoForm from './components/MovimientoForm'
import HistorialCaja from './components/HistorialCaja'

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Archivo Documental</h1>
      <EstanteriaList />
      <CajaForm />
      <CajasList />
      <CajasTable />
      <MovimientoForm />
      <HistorialCaja cajaId={1} />  {/* ejemplo con caja ID 1 */}
    </div>
  )
}

export default App
