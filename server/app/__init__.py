from .extensions import init_extensions
from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///notes.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    '''Initializing the extensions'''
    init_extensions(app)

    '''Registering Blueprints'''
    from .routes.app import app_bp
    app.register_blueprint(app_bp, url_prefix='/api')
    return app