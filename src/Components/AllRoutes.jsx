import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../Pages/Login'
import TimeTracker from '../Pages/TimeTracker'
import Calender from '../Pages/Calender'
import Dashboard from '../Pages/Dashboard'
import Report from '../Pages/Report'
import Project from '../Pages/Project'
import RequireAuth from "./RequireAuth"
import Form from "../Pages/Form"
import Setting from "../Pages/Setting"
import Team from '../Pages/Team'
import Client from '../Pages/Client'
import Tags from '../Pages/Tags'
import SignUp from './SignUp'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<RequireAuth><TimeTracker/></RequireAuth>}/>
        <Route path='/login' element={<Login/>}  />
        <Route path='/calender' element={<RequireAuth><Calender/></RequireAuth>}  />
        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}  />
        <Route path='/reports' element={<Report/>}  />
        <Route path='/projects' element={<Project/>}  />
        <Route path='/team' element={<Team/>}  />
        <Route path='/client' element={<Client/>}  />
        <Route path='/tags' element={<Tags/>}  />

        <Route path='/setting' element={<Setting/>}  />

        <Route path="/form" element={<Form/>}/>
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  )
}

export default AllRoutes