import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';


// https://mswjs.io/docs/getting-started/integrate/browser

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
  );
