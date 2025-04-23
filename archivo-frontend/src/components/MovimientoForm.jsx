import React, { useState, useEffect } from 'react'
import axios from 'axios'

function MovimientoForm() {
  const [formData, setFormData] = useState({
    caja_id: '',
    usuario_id: '',
    descripcion: '',
  })

  const [cajas, setCajas] = useState([])
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/cajas').then(res => setCajas(res.data))
    axios.get('http://localhost:8000/usuarios').then(res => setUsuarios(res.data))
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/movimientos', formData)
      .then(() => {
        alert('Movimiento registrado ✅')
        setFormData({ caja_id: '', usuario_id: '', descripcion: '' })
      })
      .catch(err => {
        console.error(err)
        alert('Error al registrar movimiento ❌')
      })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md max-w-md">
      <h2 className="text-xl font-semibold mb-4">Registrar Movimiento</h2>

      <select
        className="w-full mb-2 p-2 border rounded"
        name="caja_id"
        value={formData.caja_id}
        onChange={handleChange}
        required
      >
        <option value="">Seleccionar Caja</option>
        {cajas.map(c => (
          <option key={c.id} value={c.id}>{c.numero}</option>
        ))}
      </select>

      <select
        className="w-full mb-2 p-2 border rounded"
        name="usuario_id"
        value={formData.usuario_id}
        onChange={handleChange}
        required
      >
        <option value="">Seleccionar Usuario</option>
        {usuarios.map(u => (
          <option key={u.id} value={u.id}>{u.nombre}</option>
        ))}
      </select>

      <textarea
        className="w-full mb-2 p-2 border rounded"
        name="descripcion"
        placeholder="Descripción del movimiento"
        value={formData.descripcion}
        onChange={handleChange}
        required
      />

      <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
        Registrar
      </button>
    </form>
  )
}

export default MovimientoForm
