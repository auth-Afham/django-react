# Django-React Tech Stack

## Project Structure
This repository contains a full-stack web application using Django for the backend and React for the frontend.

```
django-react/
│── backend/
│   │── api/
│   │── backend/
│   │── env/
│   └── manage.py
│── frontend/
│   │── src/
│   │── public/
│   └── package.json
└── README.md
```

## Backend (Django)
- Django REST Framework for API development
- SQLite database
- Django models, views, and serializers

### Setup
1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Create a virtual environment:
   ```sh
   python -m venv env
   source env/bin/activate  # On Windows use `env\Scripts\activate`
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Apply migrations and run the server:
   ```sh
   python manage.py migrate
   python manage.py runserver
   ```

## Frontend (React)
- React with Redux for state management
- TailwindCSS for styling

### Setup
1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## API Endpoints
| Method | Endpoint      | Description           |
|--------|--------------|-----------------------|
| GET    | /api/tasks/  | Retrieve all tasks    |
| POST   | /api/tasks/  | Create a new task     |
| PUT    | /api/tasks/1/| Update task with ID=1 |
| DELETE | /api/tasks/1/| Delete task with ID=1 |

## Environment Variables
Create a `.env` file in the `backend` and `frontend` directories to store environment-specific configurations.

## .gitignore
```
# Python
__pycache__/
*.pyc
*.pyo
*.pyd
env/

# Node.js
node_modules/
*.log

# Django
*.sqlite3
.env
```

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push the branch (`git push origin feature-branch`)
5. Open a pull request

