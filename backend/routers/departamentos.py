from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.models import Departamento, SessionLocal
from backend.schemas import DepartamentoOut

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/departamentos", response_model=list[DepartamentoOut])
def listar_departamentos(db: Session = Depends(get_db)):
    return db.query(Departamento).all()
