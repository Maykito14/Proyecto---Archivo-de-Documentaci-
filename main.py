# main.py
from fastapi import FastAPI
from backend.models import Base, engine
from backend.routers import estanterias, cajas, niveles, departamentos, movimientos

app = FastAPI()

@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)

app.include_router(estanterias.router)
app.include_router(cajas.router)
app.include_router(niveles.router)
app.include_router(departamentos.router)
app.include_router(movimientos.router)

@app.get("/")
def root():
    return {"message": "¡API de archivo funcionando correctamente!"}


