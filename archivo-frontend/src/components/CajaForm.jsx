import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CajaForm() {
  const [formData, setFormData] = useState({
    numero: '',
    descripcion: '',
    nivel_id: '',
    departamento_id: '',
  })

  const [niveles, setNiveles] = useState([])
  const [departamentos, setDepartamentos] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/niveles')
      .then(res => setNiveles(res.data))
      .catch(err => console.error(err))

    axios.get('http://localhost:8000/departamentos')
      .then(res => setDepartamentos(res.data))
      .catch(err => console.error(err))
  }, [])

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

      <select
        className="w-full mb-2 p-2 border rounded"
        name="nivel_id"
        value={formData.nivel_id}
        onChange={handleChange}
        required
      >
        <option value="">Seleccione un nivel</option>
        {niveles.map(n => (
          <option key={n.id} value={n.id}>Estantería {n.estanteria_id} - Nivel {n.numero}</option>
        ))}
      </select>

      <select
        className="w-full mb-4 p-2 border rounded"
        name="departamento_id"
        value={formData.departamento_id}
        onChange={handleChange}
        required
      >
        <option value="">Seleccione un departamento</option>
        {departamentos.map(d => (
          <option key={d.id} value={d.id}>{d.nombre}</option>
        ))}
      </select>

      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Guardar Caja
      </button>
    </form>
  )
}

export default CajaForm

