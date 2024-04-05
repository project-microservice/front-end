import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './globalStyle/index.tsx';
import { Provider } from 'react-redux';
import { store } from './redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalStyle>
    <Provider store={store}>
      <App />
    </Provider>
  </GlobalStyle>,
);
