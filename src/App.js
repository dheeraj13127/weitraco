import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Bmi from './components/Dashboard/DashboardSubComponents/Bmi/Bmi'
import NewWeight from './components/Dashboard/DashboardSubComponents/NewWeight/NewWeight'
import Stats from './components/Dashboard/DashboardSubComponents/Stats/Stats'
import StatsEditForm from './components/Dashboard/DashboardSubComponents/Stats/StatsEditForm/StatsEditForm'
import Landing from './components/Landing/Landing'
function App() {

  return (
    <div>
      <Router>
      <Route path="/" exact component={Landing}/>
      <Route path="/dashboard" exact component={Dashboard}/>
      <Route path="/dashboard/bmi" exact component={Bmi}/>
      <Route path="/dashboard/stats" exact component={Stats}/>
      <Route path="/dashboard/newWeight" exact component={NewWeight}/>
      <Route path="/dashboard/stats/:id" exact component={StatsEditForm}/>
      </Router>
      
    </div>
  )
}

export default App
