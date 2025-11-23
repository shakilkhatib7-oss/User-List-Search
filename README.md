# User List Search

A React application built with Vite that displays a list of users with search functionality, utilizing PrimeReact for UI components and TanStack Query for data management.

## 🚀 Features & Functionality

### 🛠 Tech Stack

- **React 19**: Modern UI library for building interactive interfaces.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS v4**: Utility-first CSS framework for styling.
- **PrimeReact**: Rich UI component library (DataTable, etc.).
- **TanStack Query (React Query)**: Efficient server state management and data fetching.
- **Lodash**: Utility library (used for debouncing search).

### ✨ Key Features

1.  **User List Display**:

    - Fetches user data from an external API (`jsonplaceholder`).
    - Displays data in a responsive **PrimeReact DataTable**.
    - Columns include: ID, Name, Username, and Email.

2.  **Advanced Data Handling**:

    - **React Query** integration for caching, loading states (`isLoading`), and efficient data fetching.
    - **Debounced Search**: Search input field with 500ms debounce (powered by Lodash) to optimize performance.

3.  **UI & UX**:
    - **Modern Styling**: Clean interface using Tailwind CSS.
    - **Interactive Header**: Custom `CommonDataTableHeader` component containing the search bar.
    - **Icons**: Integration of **PrimeIcons** and **FontAwesome**.

## 📦 Installation & Run

1.  **Install dependencies**:

    ```bash
    npm install
    ```

2.  **Start the development server**:

    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```
