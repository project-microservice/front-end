import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RouteInterface, publicRoutes } from './routes';
import DefaultLayout from './layout/default';
import { ComponentType, Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route: RouteInterface, index) => {
            const Page = route.component;
            let Layout: ComponentType<any> = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
