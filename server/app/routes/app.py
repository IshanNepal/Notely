from flask import Blueprint, request, jsonify
from ..model import Notes
from ..extensions import db

app_bp = Blueprint('app', __name__)

@app_bp.route('/')
def get_app_notes():
    try:
        notes = Notes.query.all()
        '''This is a get Request Make sure the notes Json is sucessfully fetched'''

        notes_list = [{"id": n.id, "title": n.title, "content": n.content} for n in notes]
        return jsonify({"message":"sucessfully fetched notes","notes":notes_list}), 200
    except Exception as e:
        return jsonify ({'message':'server error', 'error':e}),500

@app_bp.route('/add_note', methods=['POST'])
def add_note():
    try:
        data = request.json
        title = data['title']
        content = data['content']

        new_note = Notes(title=title, content=content)
        db.session.add(new_note)
        db.session.commit()
        
        return jsonify({'message':'sucessfully added new note'}),201
    except Exception as e:
        return jsonify({'message':'server error', 'error':e}),500
    
@app_bp.route('/update/<int:id>', methods=['PUT'])
def update_note(id):
    try:
        data = request.json
        title = data.get('title')
        content = data.get('content')

        note_to_be_updated = Notes.query.get(id)
        if not note_to_be_updated:
            return jsonify({'message': 'Note not found'}), 404

        # Update fields if provided
        if title:
            note_to_be_updated.title = title
        if content:
            note_to_be_updated.content = content

        db.session.commit()  # save changes
        return jsonify({
            'message': f'Note {id} updated',
            'note': {
                'title': note_to_be_updated.title,
                'content': note_to_be_updated.content
            }
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app_bp.route('/delete/<int:id>', methods=['DELETE'])
def remove_note(id):
    try:
        note = Notes.query.get(id)
        if not note:
            return jsonify({'message': 'no note found with that id'}), 404
        
        db.session.delete(note)
        db.session.commit()
        return jsonify({'message' : 'sucessfully delted note '}) ,200
    
    except Exception as e:
        return jsonify ({'message': 'server error', 'error':e})