import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CajasTable() {
  const [cajas, setCajas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/cajas')
      .then(res => setCajas(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Listado de Cajas</h2>

      <table className="table-auto w-full border text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-2 py-1 border">ID</th>
            <th className="px-2 py-1 border">Número</th>
            <th className="px-2 py-1 border">Descripción</th>
            <th className="px-2 py-1 border">Nivel</th>
            <th className="px-2 py-1 border">Departamento</th>
          </tr>
        </thead>
        <tbody>
          {cajas.map(caja => (
            <tr key={caja.id}>
              <td className="px-2 py-1 border">{caja.id}</td>
              <td className="px-2 py-1 border">{caja.numero}</td>
              <td className="px-2 py-1 border">{caja.descripcion}</td>
              <td className="px-2 py-1 border">{caja.nivel_id}</td>
              <td className="px-2 py-1 border">{caja.departamento_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CajasTable
