from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000", "https://*.netlify.app"]}})

@app.route('/api/form-data', methods=['GET'])
def get_form_data():
    # Generate random values for demonstration
    quantity = random.randint(1, 10)
    price = random.randint(10, 100)
    total = random.randint(quantity * price, quantity * price * 2)  # Random total
    profit = round(random.uniform(5, 20), 2)
    
    return jsonify({
        'quantity': quantity,
        'price': price,
        'total': total,
        'profit': profit
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
