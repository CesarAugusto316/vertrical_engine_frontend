import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { MedicineProvider } from './context/MedicineProvider';
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';


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
    <MedicineProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MedicineProvider>
    // </React.StrictMode>
  );
