from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Donut(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    flavor = db.Column(db.String(30), unique=True, nullable=False)
    price = db.Column(db.Float, unique=False, nullable=False)
    quantity = db.Column(db.Integer, unique=False, nullable=False)

    def __repr__(self):
        return self.flavor

    def serialize(self):
        return {
            "id": self.id,
            "flavor": self.flavor,
            "price": self.price,
            "quantity": self.quantity,
        }

class Bagel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    flavor = db.Column(db.String(120), unique=False, nullable=False)
    price = db.Column(db.Float, unique=False, nullable=False)
    quantity = db.Column(db.Integer, unique=False, nullable=False)
    
    def __repr__(self):
        return self.flavor

    def serialize(self):
        return {
            "id": self.id,
            "flavor": self.flavor,
            "price": self.price,
            "quantity": self.quantity,
        }

class Pastry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    flavor = db.Column(db.String(120), unique=True, nullable=False)
    price = db.Column(db.Float,unique=False, nullable=False)
    quantity = db.Column(db.Integer, unique=False, nullable=False)
    def __repr__(self):
        return self.flavor

    def serialize(self):
        return {
            "id": self.id,
            "flavor": self.flavor,
            "price": self.price,
            "quantity": self.quantity,
        }

class Muffin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    flavor = db.Column(db.String(120), unique=True, nullable=False)
    price = db.Column(db.Float, unique=False, nullable=False)
    quantity = db.Column(db.Integer, unique=False, nullable=False)
    def __repr__(self):
        return self.flavor

    def serialize(self):
        return {
            "id": self.id,
            "flavor": self.flavor,
            "price": self.price,
            "quantity": self.quantity,
        }

class Coffee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    flavor = db.Column(db.String(120), unique=True, nullable=False)
    price = db.Column(db.Float, unique=False, nullable=False)
    quantity = db.Column(db.Integer, unique=False, nullable=False)
    def __repr__(self):
        return self.flavor

    def serialize(self):
        return {
            "id": self.id,
            "flavor": self.flavor,
            "price": self.price,
            "quantity": self.quantity,
        }