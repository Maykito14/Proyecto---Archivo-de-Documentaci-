from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.models import Nivel, SessionLocal
from backend.schemas import NivelSimple

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/niveles", response_model=list[NivelSimple])
def listar_niveles(db: Session = Depends(get_db)):
    return db.query(Nivel).all()
