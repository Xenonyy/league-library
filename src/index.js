import { createRoot } from 'react-dom/client';
import './css/MainPage.scss';
import App from './App';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);
