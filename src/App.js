import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Budgets from './pages/Budgets';
import Goals from './pages/Goals';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/expenses" component={Expenses} />
          <Route path="/budgets" component={Budgets} />
          <Route path="/goals" component={Goals} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
