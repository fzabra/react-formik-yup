import { createRoot } from 'react-dom/client'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './GlobalStyled.style';

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <>
  <GlobalStyles />
  <App />
  </>  
)
reportWebVitals();