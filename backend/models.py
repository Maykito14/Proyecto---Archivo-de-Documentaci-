# backend/models.py
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Text, create_engine
from sqlalchemy.orm import declarative_base, relationship, sessionmaker
from datetime import datetime

Base = declarative_base()
engine = create_engine("sqlite:///archivo.db")
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

class Departamento(Base):
    __tablename__ = 'departamentos'
    id = Column(Integer, primary_key=True)
    nombre = Column(String, unique=True, nullable=False)

    usuarios = relationship("Usuario", back_populates="departamento")
    cajas = relationship("Caja", back_populates="departamento")

class Usuario(Base):
    __tablename__ = 'usuarios'
    id = Column(Integer, primary_key=True)
    nombre = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    departamento_id = Column(Integer, ForeignKey('departamentos.id'))

    departamento = relationship("Departamento", back_populates="usuarios")
    movimientos = relationship("Movimiento", back_populates="usuario")

class Estanteria(Base):
    __tablename__ = 'estanterias'
    id = Column(Integer, primary_key=True)
    codigo = Column(String, unique=True, nullable=False)

    niveles = relationship("Nivel", back_populates="estanteria")

class Nivel(Base):
    __tablename__ = 'niveles'
    id = Column(Integer, primary_key=True)
    numero = Column(Integer, nullable=False)
    estanteria_id = Column(Integer, ForeignKey('estanterias.id'))

    estanteria = relationship("Estanteria", back_populates="niveles")
    cajas = relationship("Caja", back_populates="nivel")

class Caja(Base):
    __tablename__ = 'cajas'
    id = Column(Integer, primary_key=True)
    numero = Column(String, nullable=False)
    descripcion = Column(Text)
    fecha_ingreso = Column(DateTime, default=datetime.utcnow)
    nivel_id = Column(Integer, ForeignKey('niveles.id'))
    departamento_id = Column(Integer, ForeignKey('departamentos.id'))

    nivel = relationship("Nivel", back_populates="cajas")
    departamento = relationship("Departamento", back_populates="cajas")
    movimientos = relationship("Movimiento", back_populates="caja")

class Movimiento(Base):
    __tablename__ = 'movimientos'
    id = Column(Integer, primary_key=True)
    caja_id = Column(Integer, ForeignKey('cajas.id'))
    usuario_id = Column(Integer, ForeignKey('usuarios.id'))
    fecha = Column(DateTime, default=datetime.utcnow)
    descripcion = Column(Text)

    caja = relationship("Caja", back_populates="movimientos")
    usuario = relationship("Usuario", back_populates="movimientos")