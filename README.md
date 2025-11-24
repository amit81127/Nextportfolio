# Next.js Portfolio with MongoDB Backend

This is a Next.js portfolio application integrated with MongoDB for dynamic project management.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB Atlas account (or local MongoDB)

### Setup

1.  **Clone the repository**
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Environment Variables**:
    Create a `.env.local` file in the root directory and add your MongoDB connection string:
    ```env
    MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/nextportfolio
    ```
    (See `.env.example` for reference)

### Running the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Admin Panel

Access the admin panel at `/admin` to manage projects.
- **Dashboard**: `/admin`
- **Add Project**: `/admin/projects/add`
- **Manage Projects**: `/admin/projects`

## API Endpoints

- `GET /api/projects`: Fetch all projects
- `POST /api/projects`: Create a new project
- `GET /api/projects/[id]`: Fetch a single project
- `PUT /api/projects/[id]`: Update a project
- `DELETE /api/projects/[id]`: Delete a project

## Folder Structure

- `src/app/(site)`: Public facing pages (Home, Projects, About, Contact)
- `src/app/admin`: Admin dashboard and management pages
- `src/app/api`: Backend API routes
- `src/components`: Reusable UI components
deploy