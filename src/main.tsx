import { createTheme, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './error-page';
import "./main.css";
import { HomePage } from './routes/home';
import { Leaderboard } from './routes/leaderboard';
import { Root } from './routes/root';
import { TaskPage } from './routes/tasks';
import { taskAction, taskLoader } from './data/task';
import { ContactsPage } from './routes/contacts';
import { ContactPage } from './routes/contact';
import { EditContactPage } from './routes/editcontact';
import { destroyContactAction } from './routes/destroy';

console.log(import.meta.env);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
        loader: Leaderboard.loader,
      },
      {
        path: "/tasks",
        element: <TaskPage />,
        loader: taskLoader,
        action: taskAction,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
        loader: ContactsPage.loader,
        action: ContactsPage.action,
      },
      {
        path: "/contacts/:contactId",
        element: <ContactPage />,
        loader: ContactPage.loader,
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContactPage />,
        loader: EditContactPage.loader,
        action: EditContactPage.action,
      },
      {
        path: "/contacts/:contactId/destroy", // Seems like bad practice vs CSRF?
        action: destroyContactAction,
      }
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});


const theme = createTheme({
  palette: {
    mode: "light", // dark for darkmode
  },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);

