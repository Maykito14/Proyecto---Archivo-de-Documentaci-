# backend/routers/estanterias.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.models import Estanteria, Nivel, SessionLocal
from backend.schemas import EstanteriaCreate, EstanteriaOut, NivelBase, NivelOut

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/estanterias", response_model=EstanteriaOut)
def crear_estanteria(estanteria: EstanteriaCreate, db: Session = Depends(get_db)):
    db_estanteria = Estanteria(**estanteria.dict())
    db.add(db_estanteria)
    db.commit()
    db.refresh(db_estanteria)
    return db_estanteria

@router.get("/estanterias", response_model=list[EstanteriaOut])
def listar_estanterias(db: Session = Depends(get_db)):
    return db.query(Estanteria).all()

@router.post("/niveles", response_model=NivelOut)
def crear_nivel(nivel: NivelBase, db: Session = Depends(get_db)):
    db_nivel = Nivel(**nivel.dict())
    db.add(db_nivel)
    db.commit()
    db.refresh(db_nivel)
    return db_nivel
