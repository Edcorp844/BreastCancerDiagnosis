from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from BackEnd.Python.model import BreatsCancerDiagnosis as BCD

app = Flask(__name__)
CORS(app)

@app.route("/process", methods=["POST"])
def process_data():
    if 'image' not in request.files:
        return jsonify({'Error': 'No file part'})
    
    file = request.files['image']
    
    if file.filename == '':
        return jsonify({'Error': 'No selected file'})
    
    if file:
        upload_folder = 'uploads'
        if not os.path.exists(upload_folder):
            os.makedirs(upload_folder)
        file_path = os.path.join(upload_folder, file.filename)
        file.save(file_path)
        
        try:
          result = BCD.Diagonise(file_path)
        except Exception as e:
            return jsonify({'Error': 'Image processing failed', 'details': str(e)})
        return jsonify({'Message': 'File uploaded and processed successfully', 'Image': file.filename, 'Result':result })


if __name__ == "__main__":
    app.run()
