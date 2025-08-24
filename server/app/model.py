from .extensions import db

class Notes (db.Model):
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    title = db.Column(db.String(255), unique=False, nullable=False)
    content = db.Column(db.Text, nullable = False)