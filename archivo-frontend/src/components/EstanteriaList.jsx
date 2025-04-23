import React, { useEffect, useState } from 'react'
import axios from 'axios'

function EstanteriaList() {
  const [estanterias, setEstanterias] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/estanterias')
      .then(res => setEstanterias(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h2 className="text-xl mb-2">Estanterías</h2>
      <ul className="list-disc list-inside">
        {estanterias.map(est => (
          <li key={est.id}>{est.codigo}</li>
        ))}
      </ul>
    </div>
  )
}

export default EstanteriaList
