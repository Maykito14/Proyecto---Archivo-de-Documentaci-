// src/components/CajaForm.jsx
import React, { useState } from 'react'
import axios from 'axios'

function CajaForm() {
  const [formData, setFormData] = useState({
    numero: '',
    descripcion: '',
    nivel_id: '',
    departamento_id: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/cajas', formData)
      .then(() => {
        alert('Caja creada con éxito ✅')
        setFormData({
          numero: '',
          descripcion: '',
          nivel_id: '',
          departamento_id: '',
        })
      })
      .catch(err => {
        console.error(err)
        alert('Error al crear la caja ❌')
      })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md max-w-md">
      <h2 className="text-xl font-semibold mb-4">Crear Caja</h2>

      <input
        className="w-full mb-2 p-2 border rounded"
        type="text"
        name="numero"
        placeholder="Número de caja"
        value={formData.numero}
        onChange={handleChange}
        required
      />
      <textarea
        className="w-full mb-2 p-2 border rounded"
        name="descripcion"
        placeholder="Descripción"
        value={formData.descripcion}
        onChange={handleChange}
      />
      <input
        className="w-full mb-2 p-2 border rounded"
        type="number"
        name="nivel_id"
        placeholder="ID del nivel"
        value={formData.nivel_id}
        onChange={handleChange}
        required
      />
      <input
        className="w-full mb-4 p-2 border rounded"
        type="number"
        name="departamento_id"
        placeholder="ID del departamento"
        value={formData.departamento_id}
        onChange={handleChange}
        required
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Guardar Caja
      </button>
    </form>
  )
}

export default CajaForm
