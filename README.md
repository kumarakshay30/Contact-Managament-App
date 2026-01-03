# Contact Management System

A fully functional MERN stack contact management web application that allows users to add, view, sort, and delete contacts with a modern, responsive interface.

## How It Works

### Architecture Overview
The application follows a **client-server architecture** with clear separation between frontend and backend:

1. **Frontend (React)**: Handles user interface, form validation, and API communication
2. **Backend (Node.js/Express)**: Manages API endpoints, business logic, and database operations
3. **Database (MongoDB)**: Stores contact data with automatic timestamps

### Data Flow
1. **User Interaction**: User fills out the contact form in the React frontend
2. **Client-Side Validation**: Form is validated in real-time (required fields, email format)
3. **API Request**: Validated data is sent to backend via Axios HTTP client
4. **Server Processing**: Backend validates data again and stores in MongoDB
5. **Database Storage**: Contact is saved with automatic creation timestamp
6. **Response & UI Update**: Backend returns success response, frontend updates contact list

### Key Components

#### Frontend Components (`frontend/src/App.js`)
- **Contact Form**: Real-time validation with loading states
- **Contact List**: Dynamic table displaying all contacts
- **Sorting System**: Multi-column sorting (date, name, email, phone)
- **Success Messages**: Auto-dismissing notifications
- **Responsive Design**: Mobile-first CSS with breakpoints

#### Backend Components (`backend/server.js`)
- **Express Server**: RESTful API with CORS enabled
- **Mongoose Models**: Contact schema with validation rules
- **API Routes**: CRUD operations for contacts
- **Error Handling**: Comprehensive error responses

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
- ✅ Sorting by date added, name, email, or phone
- ✅ Loading states during form submission
- ✅ Modern UI with gradient design
- ✅ Component-based structure for maintainability

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
   # For MongoDB Atlas: Get connection string and update .env
   ```

2. **Start Backend Server**
   ```bash
   cd backend
   npm start
   # Server runs on http://localhost:5001
   ```

3. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm start
   # App runs on http://localhost:3000
   ```

## Usage Guide

### Adding Contacts
1. Open http://localhost:3000 in your browser
2. Fill out the contact form:
   - **Name** (required): Full name of the contact
   - **Email** (required): Valid email address format
   - **Phone** (required): Phone number
   - **Message** (optional): Additional notes or message
3. Click "Add Contact" - button shows loading state during submission
4. Success message appears and contact is added to the list

### Managing Contacts
- **View Contacts**: All contacts display in a table below the form
- **Sort Contacts**: Use dropdown to sort by:
  - Date Added (newest first)
  - Name (alphabetical)
  - Email (alphabetical)
  - Phone (alphabetical)
- **Delete Contacts**: Click the delete button next to any contact
- **Success Feedback**: Green messages confirm successful operations

### Validation Rules
- **Name**: Required field, cannot be empty
- **Email**: Required field, must match email format (user@domain.com)
- **Phone**: Required field, cannot be empty
- **Message**: Optional field, can be left blank
- **Submit Button**: Disabled until all required fields are valid
- **Real-time Feedback**: Validation errors show immediately

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

**⚠️ IMPORTANT SECURITY NOTE:**
- Never commit `.env` files to version control
- All `.env*` files are already included in `.gitignore`
- Your MongoDB credentials are secure and not exposed in GitHub

### For Local Development:

1. **Create `.env.local` file in backend directory:**
   ```bash
   cd backend
   touch .env.local
   ```

2. **Add your environment variables to `.env.local`:**
   ```
   MONGODB_URI=mongodb+srv://your_username:your_password@your-cluster.mongodb.net/?appName=Cluster0
   PORT=5001
   ```

3. **For Production/Deployment:**
   - Use environment-specific configuration
   - Set environment variables in your hosting platform
   - Never expose credentials in code

## Development Notes

### Technical Implementation Details
- **Client-Side Validation**: Immediate feedback for better UX
- **Server-Side Validation**: Ensures data integrity and security
- **Error Handling**: Comprehensive error responses for all API calls
- **Loading States**: Visual feedback during async operations
- **Auto-Dismiss Messages**: Success notifications disappear after 3 seconds
- **Responsive Design**: Mobile-first CSS with media queries
- **Component Structure**: Single-file React component for maintainability

### State Management
- **React Hooks**: useState for local state management
- **Form State**: Controlled components with validation
- **Contact List**: Real-time updates after CRUD operations
- **Sorting**: Dynamic sorting with multiple criteria

### API Communication
- **Axios**: Promise-based HTTP client with error handling
- **Base URL**: Configurable API endpoint
- **Request/Response**: JSON data format
- **CORS**: Cross-origin requests properly configured

### Database Integration
- **Mongoose**: MongoDB object modeling with schema validation
- **Timestamps**: Automatic createdAt fields
- **Connection Management**: Robust MongoDB connection handling
- **Data Validation**: Schema-level validation rules

### Performance Considerations
- **Optimistic Updates**: UI updates immediately after successful operations
- **Debounced Validation**: Efficient form validation
- **Responsive Images**: Optimized asset loading
- **Clean Architecture**: Separation of concerns for scalability
