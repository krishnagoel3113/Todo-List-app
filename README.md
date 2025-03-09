# Todo App

A simple Todo application built using React that allows users to manage their daily tasks. Users can add, edit, delete, and mark tasks as completed. The application also persists data using localStorage.

## Features
- Add new todos
- Edit existing todos
- Delete todos
- Mark todos as completed
- Toggle visibility of completed todos
- Data persistence with localStorage

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/krishnagoel3113/Todo-List-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd todo-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open the app in your browser at `http://localhost:5173/` (or another port as specified by Vite).

## Components

### `App.jsx`
- Manages the main application state, including the list of todos and visibility filters.
- Uses `useEffect` to persist todos in `localStorage`.
- Provides functions for adding, editing, deleting, and marking todos as completed.

### `Navbar.jsx`
- Displays the navigation bar at the top of the application.

### `Footer.jsx`
- Displays the footer section.

### `Todos List`
- Renders the list of todos dynamically.
- Provides options to edit, delete, and toggle completion status.

## State Management

- `Todos`: Stores the list of todos.
- `Todo`: Tracks the input value for adding/editing todos.
- `showCompleted`: Controls whether completed todos are displayed.
- `editingId`: Tracks the id of the todo being edited.

## Functions

- `handleChange(e)`: Updates the `Todo` state when typing in the input field.
- `HandleAdd()`: Adds a new todo or updates an existing one.
- `handleDelete(id)`: Removes a todo from the list.
- `handleEdit(id, text)`: Loads an existing todo into the input field for editing.
- `handleCheckBox(id)`: Toggles the completed state of a todo.
- `HandleShowTodos()`: Toggles visibility of completed todos.

## Technologies Used

- React
- JavaScript (ES6+)
- Tailwind CSS
- Vite
- LocalStorage API

## License

This project is licensed under the MIT License.

---

Happy Coding! 🚀

