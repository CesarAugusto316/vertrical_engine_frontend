import ReactDOM from 'react-dom/client';
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
    <App />
    // </React.StrictMode>
  );
