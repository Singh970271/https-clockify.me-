import React from 'react'
import Dashboard from './components2/Dashboard'
import Barchart from './Mycomponents/Barchart'
import Piechart from './Mycomponents/Piechart'

const Report = () => {
  return (
    <div>
        <Dashboard/>
        <Barchart/>
        <Piechart/>
    </div>
  )
}

export default Report