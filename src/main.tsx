import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';


// API Mock Server Worker for Development
if (import.meta.env.DEV) {
  const { browserWorker } = await import('./mocks/browserWorker');
  browserWorker.start();
}

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    // </React.StrictMode>
  );
