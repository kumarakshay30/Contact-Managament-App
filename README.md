# Contact Management System

A fully functional MERN stack contact management web application built according to the specifications in the PDF requirements.

## Features

### Core Requirements
- ✅ Contact form with validation (Name, Email, Phone, Message)
- ✅ Backend API with POST and GET endpoints
- ✅ MongoDB database integration
- ✅ Contact list/table display without page reload
- ✅ Responsive layout with clean design
- ✅ Submit button disabled when form is invalid

### Bonus Features
- ✅ Delete contact functionality
- ✅ Success messages for user feedback
- ✅ Sorting by date added, name, or email
- ✅ Reusable components structure
- ✅ Modern UI with gradient design

## Tech Stack

### Frontend
- **React.js** - UI framework
- **Axios** - HTTP client for API calls
- **CSS3** - Styling with responsive design
- **useState Hook** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## API Endpoints

### GET /api/contacts
- Fetches all contacts from the database
- Returns contacts sorted by creation date (newest first)

### POST /api/contacts
- Creates a new contact
- Validates required fields (name, email, phone)
- Validates email format
- Returns the created contact

### DELETE /api/contacts/:id
- Deletes a contact by ID
- Returns success message

## Database Schema

```javascript
{
  name: String (required),
  email: String (required, validated),
  phone: String (required),
  message: String (optional),
  createdAt: Date (default: current date)
}
```

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running
- npm or yarn package manager

### Installation

1. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start MongoDB**
   ```bash
   # Make sure MongoDB is running on localhost:27017
   ```

2. **Start Backend Server**
   ```bash
   cd backend
   npm start
   # Server runs on http://localhost:5000
   ```

3. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm start
   # App runs on http://localhost:3000
   ```

## Usage

1. Open http://localhost:3000 in your browser
2. Fill out the contact form with required fields (Name, Email, Phone)
3. Click "Add Contact" to submit
4. View contacts in the table below
5. Sort contacts by date, name, or email
6. Delete contacts using the delete button
7. Success messages appear for add/delete operations

## Validation

- **Name**: Required field
- **Email**: Required field with email format validation
- **Phone**: Required field
- **Message**: Optional field
- Submit button is disabled until all required fields are filled

## Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets (768px and below)
- Mobile phones (480px and below)

## File Structure

```
contact-manager/
├── backend/
│   ├── package.json
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
└── README.md
```

## Environment Variables

Create a `.env` file in the backend directory based on `.env.example`:

```bash
cp backend/.env.example backend/.env
```

Backend `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/contact-manager
PORT=5001
```

**⚠️ SECURITY NOTE:**
- Never commit `.env` files to version control
- The `.env` file is already included in `.gitignore`
- Use `.env.example` as a template for environment variables
- For production, use environment-specific configuration

## Development Notes

- The application uses client-side validation for immediate feedback
- Server-side validation ensures data integrity
- Error handling implemented for all API calls
- Clean, modern UI with gradient design and smooth animations
- Component-based structure for maintainability
