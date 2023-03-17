import { Page } from './components/page.jsx';
import './App.scss'
import {store} from './store.jsx';
import { Provider } from 'react-redux';

export const App = () => {
  return (
    <Provider store={store}>
    <div className='app'>
      <Page />
    </div>
    </Provider>

  );
};