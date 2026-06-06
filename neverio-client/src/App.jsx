import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
// HomePage Structure
import Layout from './layouts/Layout';
import ArticlePage from './pages/LandingPages/ArticlePage';
import HomePage from './pages/LandingPages/HomePage';
import AboutPage from './pages/LandingPages/AboutPage';
import ArticleListPage from './pages/LandingPages/ArticleListPage';

import AuthLayout from './layouts/AuthLayout';
import SignInPage from './pages/AuthPages/SignInPage';
import SignUpPage from './pages/AuthPages/SignUpPage';

import NotFoundPage from './pages/NotFoundPage';
// Dashboard Structure
import DashLayout from './layouts/DashLayout';
import DashboardPage from './pages/DashboardPages/DashboardPage';
import ReportsPage from './pages/DashboardPages/ReportsPage';
import UsersPage from './pages/DashboardPages/UsersPage';
import DashArticleListPage from './pages/DashboardPages/DashArticleListPage';
import ProtectedRoute from './components/ProtectedRoute';

const theme = createTheme({
  palette: {
    primary: {
      main: '#384355',
      contrastText: '#FDFDFD',
    },
    secondary: {
      main: '#FCF886',
      contrastText: '#384355',
    },
    success: {
      main: '#7FCC7E',
      contrastText: '#384355',
    },
    info: {
      main: '#8ED9F4',
      contrastText: '#384355',
    },
    warning: {
      main: '#FCF886',
      contrastText: '#384355',
    },
    background: {
      default: '#FDFDFD',
      paper: '#FDFDFD',
    },
    text: {
      primary: '#384355',
      secondary: 'rgba(56, 67, 85, 0.7)',
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif",
    h1: { fontFamily: "'Outfit', sans-serif", fontWeight: 800 },
    h2: { fontFamily: "'Outfit', sans-serif", fontWeight: 800 },
    h3: { fontFamily: "'Outfit', sans-serif", fontWeight: 800 },
    h4: { fontFamily: "'Outfit', sans-serif", fontWeight: 800 },
    h5: { fontFamily: "'Outfit', sans-serif", fontWeight: 800 },
    h6: { fontFamily: "'Outfit', sans-serif", fontWeight: 800 },
    subtitle1: { fontWeight: 700 },
    subtitle2: { fontWeight: 700 },
    body1: { fontSize: '0.925rem', lineHeight: 1.6 },
    body2: { fontSize: '0.85rem', lineHeight: 1.6 },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: 'none',
          '&.MuiPaper-elevation3, &.MuiPaper-elevation': {
            border: '2.5px solid #384355',
            borderRadius: '24px',
            boxShadow: '4px 4px 0px 0px #384355',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '2px solid #384355',
          borderRadius: '20px',
          boxShadow: 'none',
          backgroundColor: '#FDFDFD',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: 700,
          borderRadius: '9999px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          border: '2px solid #384355',
          backgroundColor: '#FDFDFD',
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          border: '2.5px solid #384355',
          borderRadius: '24px',
          boxShadow: '8px 8px 0px 0px #384355 !important',
        },
      },
    },
  },
});

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'articles', element: <ArticleListPage /> },
      { path: 'articles/:name', element: <ArticlePage /> },
    ],
  },
  {
    path: "auth/",
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "signin", element: <SignInPage /> },
      { path: "signup", element: <SignUpPage /> },
    ],
  },
  {
    element: <ProtectedRoute />, 
    children: [
      {
        path: "dashboard/",
        element: <DashLayout />,
        errorElement: <NotFoundPage />,
        children: [
          {
            path: "",
            element: <DashboardPage />,
          },
          {
            path: "articles",
            element: <DashArticleListPage />,
          },
          {
            path: "reports",
            element: <ReportsPage />,
          },
          {
            path: "users",
            element: <UsersPage />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;