from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

'''Creating Instances'''
cors = CORS()
db = SQLAlchemy()

'''Function for Initializing Extentions'''
def init_extensions(app):
    cors.init_app(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
    db.init_app(app)

