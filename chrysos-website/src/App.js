import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Seamoss from './pages/Seamoss';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import './styles/global.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green color for wellness theme
    },
    secondary: {
      main: '#FF9800', // Orange accent color
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Brandon Grotesque", sans-serif',
    fontWeightRegular: 'normal',
    fontWeightBold: 'bold',
    h1: {
      fontFamily: '"Brandon Grotesque", sans-serif',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: '"Brandon Grotesque", sans-serif',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: '"Brandon Grotesque", sans-serif',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: '"Brandon Grotesque", sans-serif',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: '"Brandon Grotesque", sans-serif',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: '"Brandon Grotesque", sans-serif',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontFamily: '"Brandon Grotesque", sans-serif',
      fontWeight: 'normal',
    },
    subtitle2: {
      fontFamily: '"Brandon Grotesque", sans-serif',
      fontWeight: 'normal',
    },
    body1: {
      fontFamily: '"Brandon Grotesque", sans-serif',
      fontWeight: 'normal',
    },
    body2: {
      fontFamily: '"Brandon Grotesque", sans-serif',
      fontWeight: 'normal',
    },
    button: {
      fontFamily: '"Brandon Grotesque", sans-serif',
      fontWeight: 'bold',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 64px - 200px)', padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/seamoss" element={<Seamoss />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
