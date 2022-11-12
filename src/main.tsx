import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';


// Mock Service Worker for Development
if (import.meta.env.DEV) {
  const { browserWorker } = await import('./mocks/browserWorker');
  browserWorker.start();
}

// comment React.StrictMode to prevent rerendering
ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    // </React.StrictMode>
  );
