from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from backend.models import Movimiento, SessionLocal
from backend.schemas import MovimientoBase, MovimientoOut

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/movimientos", response_model=MovimientoOut)
def registrar_movimiento(mov: MovimientoBase, db: Session = Depends(get_db)):
    nuevo = Movimiento(**mov.dict())
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return nuevo

@router.get("/movimientos", response_model=list[MovimientoOut])
def listar_movimientos(caja_id: int = Query(...), db: Session = Depends(get_db)):
    return db.query(Movimiento).filter(Movimiento.caja_id == caja_id).order_by(Movimiento.fecha.desc()).all()
