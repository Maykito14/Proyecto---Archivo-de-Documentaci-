import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CajasList() {
  const [cajas, setCajas] = useState([])
  const [niveles, setNiveles] = useState([])
  const [filtros, setFiltros] = useState({ numero: '', nivel_id: '' })

  useEffect(() => {
    axios.get('http://localhost:8000/cajas').then(res => setCajas(res.data))
    axios.get('http://localhost:8000/niveles').then(res => setNiveles(res.data))
  }, [])

  const cajasFiltradas = cajas.filter(caja => {
    const coincideNumero = filtros.numero === '' || caja.numero.includes(filtros.numero)
    const coincideNivel = filtros.nivel_id === '' || caja.nivel_id === parseInt(filtros.nivel_id)
    return coincideNumero && coincideNivel
  })

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Listado de Cajas</h2>

      <div className="flex gap-4 mb-4">
        <input
          className="p-2 border rounded w-1/2"
          type="text"
          placeholder="Buscar por número"
          value={filtros.numero}
          onChange={e => setFiltros({ ...filtros, numero: e.target.value })}
        />
        <select
          className="p-2 border rounded w-1/2"
          value={filtros.nivel_id}
          onChange={e => setFiltros({ ...filtros, nivel_id: e.target.value })}
        >
          <option value="">Todos los niveles</option>
          {niveles.map(n => (
            <option key={n.id} value={n.id}>Estantería {n.estanteria_id} - Nivel {n.numero}</option>
          ))}
        </select>
      </div>

      <table className="table-auto w-full border text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-2 py-1 border">ID</th>
            <th className="px-2 py-1 border">Número</th>
            <th className="px-2 py-1 border">Descripción</th>
            <th className="px-2 py-1 border">Nivel</th>
          </tr>
        </thead>
        <tbody>
          {cajasFiltradas.map(caja => (
            <tr key={caja.id}>
              <td className="px-2 py-1 border">{caja.id}</td>
              <td className="px-2 py-1 border">{caja.numero}</td>
              <td className="px-2 py-1 border">{caja.descripcion}</td>
              <td className="px-2 py-1 border">{caja.nivel_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CajasList
