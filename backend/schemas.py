# backend/schemas.py
from pydantic import BaseModel
from datetime import datetime

class EstanteriaBase(BaseModel):
    codigo: str

class EstanteriaCreate(EstanteriaBase):
    pass

class EstanteriaOut(EstanteriaBase):
    id: int
    class Config:
        orm_mode = True

class NivelBase(BaseModel):
    numero: int
    estanteria_id: int

class NivelOut(NivelBase):
    id: int
    class Config:
        orm_mode = True

class CajaBase(BaseModel):
    numero: str
    descripcion: str | None = None
    nivel_id: int
    departamento_id: int

class CajaOut(CajaBase):
    id: int
    fecha_ingreso: datetime
    class Config:
        orm_mode = True
