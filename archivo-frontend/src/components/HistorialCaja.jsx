import React, { useEffect, useState } from 'react'
import axios from 'axios'

function HistorialCaja({ cajaId }) {
  const [movimientos, setMovimientos] = useState([])

  useEffect(() => {
    if (!cajaId) return
    axios.get(`http://localhost:8000/movimientos?caja_id=${cajaId}`)
      .then(res => setMovimientos(res.data))
      .catch(err => console.error(err))
  }, [cajaId])

  if (!cajaId) return <p className="text-gray-500">Seleccione una caja para ver historial.</p>

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-2">Historial de Movimientos</h3>
      <table className="table-auto w-full border text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-2 py-1 border">Fecha</th>
            <th className="px-2 py-1 border">Usuario</th>
            <th className="px-2 py-1 border">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {movimientos.map(mov => (
            <tr key={mov.id}>
              <td className="px-2 py-1 border">{new Date(mov.fecha).toLocaleString()}</td>
              <td className="px-2 py-1 border">{mov.usuario_id}</td>
              <td className="px-2 py-1 border">{mov.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HistorialCaja
