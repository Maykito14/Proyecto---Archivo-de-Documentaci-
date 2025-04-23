# backend/routers/cajas.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.models import Caja, SessionLocal
from backend.schemas import CajaBase, CajaOut

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/cajas", response_model=CajaOut)
def crear_caja(caja: CajaBase, db: Session = Depends(get_db)):
    db_caja = Caja(**caja.dict())
    db.add(db_caja)
    db.commit()
    db.refresh(db_caja)
    return db_caja

@router.get("/cajas", response_model=list[CajaOut])
def listar_cajas(db: Session = Depends(get_db)):
    return db.query(Caja).all()

@router.get("/cajas/{numero}", response_model=CajaOut)
def buscar_por_numero(numero: str, db: Session = Depends(get_db)):
    caja = db.query(Caja).filter(Caja.numero == numero).first()
    if not caja:
        return {"error": "Caja no encontrada"}
    return caja
