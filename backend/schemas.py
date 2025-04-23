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

class NivelSimple(BaseModel):
    id: int
    numero: int
    estanteria_id: int

    class Config:
        orm_mode = True

class DepartamentoOut(BaseModel):
    id: int
    nombre: str

    class Config:
        orm_mode = True

class MovimientoBase(BaseModel):
    caja_id: int
    usuario_id: int
    descripcion: str

class MovimientoOut(MovimientoBase):
    id: int
    fecha: datetime

    class Config:
        orm_mode = True
