import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from 'components/APP/App';
import './index.css';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'Constans/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
