from decimal import Decimal
from typing import Optional
from sqlalchemy import ForeignKey, String, Text, DECIMAL, Boolean, Integer
from sqlalchemy.orm import DeclarativeBase, mapped_column, Mapped


class Base(DeclarativeBase):
	pass


class UserBase(Base):
	__tablename__ = "users"

	id: Mapped[int] = mapped_column(primary_key=True)
	name: Mapped[str] = mapped_column(String(50))
	surename: Mapped[str] = mapped_column(String(100))	
	password: Mapped[str] = mapped_column(String(255))	
	role: Mapped[str] = mapped_column(String(20))
	email: Mapped[str] = mapped_column(String(255))
	is_active: Mapped[bool] = mapped_column(Boolean, True)
	

class ProductBase(Base):
	__tablename__ = "products"
	
	id: Mapped[int] = mapped_column(primary_key=True)
	name: Mapped[str] = mapped_column(String(100))
	category_id[Optional[int]] = mapped_column()
	retail_price[Decimal] = mapped_column(DECIMAL(10, 2))
    purchase_price[Decimal] = mapped_column(DECIMAL(10, 2))