# Todo List

A simple, responsive, and accessible Todo List application built with React and Vite. This app allows users to add, edit, and delete tasks effortlessly with an intuitive user interface. The project is designed with accessibility and modern styling practices in mind, making it both functional and visually appealing.

## Live Demo

You can view the live app on Netlify: [Todo List](https://todolistks.netlify.app/)

## Features

1. **Add New Tasks**
   - Users can add tasks through the input field and either click **Add** or press **Enter** to insert the task into the list.

2. **Display All Tasks**
   - Tasks are displayed in a clean, scrollable list interface.
   - A counter below the list shows the total number of tasks.

3. **Mark Tasks as Completed**
   - Users can check the checkbox next to a task to mark it as completed. Completed tasks will be visually distinguished (e.g., with a strikethrough).

4. **Edit Tasks**
   - Tasks can be edited by clicking the **edit icon** next to the task, which opens an edit modal.
   - The edit modal traps focus within, ensuring accessible keyboard-only interaction.
   - Press **Enter** or click **Save** in the modal to save changes.

5. **Delete Tasks**
   - Users can delete individual tasks by clicking the **delete icon** next to the task.

6. **Task Persistence**
   - The app uses **localStorage** to persist tasks, ensuring that tasks remain available even after refreshing the page.

7. **Custom Scrollbar**
   - The app features a custom, thin scrollbar for a cleaner UI.

8. **Keyboard Accessibility**
   - Full keyboard support for adding, editing, and deleting tasks.
   - Focus trapping in the edit modal enhances accessibility.

## How to Use

- Type a task into the input field and press **Enter** or click **Add** to add the task to the list.
- Check the checkbox next to a task to mark it as completed.
- Click the edit icon next to a task to modify it in an edit modal. Press **Enter** to save changes.
- Click the delete icon next to a task to remove it from the list.

## Installation Instructions

To run the app locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/karanshah1561998/TodoList
2. **Install Dependencies: Navigate to the cloned repository's directory and run:**
   ```bash
   npm install
3. **Run the App: After the dependencies are installed, start the app using:**
   ```bash
   npm run dev

## Technologies Used

- **React**: Frontend JavaScript library for building dynamic UIs.
- **Vite**: Fast build tool and development server for modern web applications.
- **CSS (Tailwind)**: Utility-first CSS framework for easy styling.

## Accessibility Highlights

- **Keyboard Navigation**: Full keyboard navigation support for all actions.
- **Focus-Trapped Edit Modal**: Ensures keyboard focus stays within the modal while editing.
- **ARIA Roles and Labels**: Improved accessibility with screen reader support.

## Future Enhancements

- Add task categories or priorities for better organization.
- Implement due dates or deadlines for tasks.
- Add a dark mode for improved user experience in low-light environments.
- Batch delete or edit mode for managing multiple tasks at once.

