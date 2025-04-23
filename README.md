# 📁 Proyecto: Archivo de Documentación

Este proyecto permite administrar el archivo físico de documentación de una empresa. La documentación se almacena en cajas, ubicadas en estanterías con niveles. Cuenta con un backend en **FastAPI (Python)** y un frontend en **React (Vite)**.

---

## 🐍 Backend (FastAPI + SQLAlchemy)

### ▶️ Cómo ejecutar el backend

1. Abrí una terminal y ubicáte en la carpeta `backend`:
   ```bash
   cd backend
   ```

2. Crear entorno virtual:
   ```bash
   python -m venv venv
   venv\Scripts\activate     # En Windows
   ```

   Si usás PowerShell:
   ```bash
   .\venv\Scripts\Activate.ps1
   ```

3. Instalar dependencias:
   ```bash
   pip install fastapi uvicorn sqlalchemy pydantic
   ```

4. Ejecutar FastAPI:
   ```bash
   uvicorn main:app --reload
   ```

5. Accedé a:
   - API: http://localhost:8000
   - Docs Swagger: http://localhost:8000/docs

---

## ⚛️ Frontend (React + Tailwind + Vite)

### ▶️ Cómo ejecutar el frontend

1. En una nueva terminal, ubicáte en la carpeta `frontend`:
   ```bash
   cd frontend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar Vite:
   ```bash
   npm run dev
   ```

4. Accedé a: [http://localhost:5173](http://localhost:5173)

---

## 🛠 Tecnologías Usadas

- **Backend:** Python, FastAPI, SQLAlchemy, Pydantic
- **Frontend:** React, Vite, TailwindCSS, Axios
- **Base de datos:** SQLite (puede cambiarse a PostgreSQL fácilmente)

---

## 📌 Funcionalidades

- Gestión de estanterías, niveles y cajas
- Formularios en React conectados al backend
- API REST con documentación Swagger
- Estructura lista para agregar autenticación y exportaciones

---

Desarrollado por: [Maykito](https://github.com/Maykito14) 🚀
