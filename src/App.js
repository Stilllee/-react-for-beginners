import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

const App = createBrowserRouter([
  {
  path:"/",
  element:<Home />,
  },
  {
    path:"/movie",
    element:<Detail />,
    },
]);

export default App;
