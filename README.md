# Dynamic Form Application

This application demonstrates a dynamic form that can handle both API data and manual user input with automatic calculations.

## Features

- Fetch random form data from API
- Manual input mode with dynamic calculations
- Automatic total calculation based on quantity and price
- Visual indication of data source (API vs Manual)

## Setup Instructions

### Backend Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the Flask server:
```bash
python app.py
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application should now be running at http://localhost:3000

## How it Works

- When the application loads, it automatically fetches random data from the API
- Click "Fetch New Data" to get new random values from the API
- When you manually modify any field, the form switches to manual input mode
- In manual mode, changing quantity or price automatically recalculates the total
- The data source indicator shows whether current values are from API or manual input
