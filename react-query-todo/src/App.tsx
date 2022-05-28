import axios from 'axios';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainTask from './components/MainTask';

axios.defaults.baseURL=`${process.env.REACT_APP_REST_URL}/api`

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      retry: false,
      refetchOnWindowFocus: false
    }
  }
})


function App() {
  return (
  <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch> 
          <Route exact path="/">
            <MainTask />
          </Route>
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  </div>
  );
}

export default App;
