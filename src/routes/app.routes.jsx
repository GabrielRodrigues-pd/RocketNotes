import {Routes, Route} from 'react-router-dom'

import { Profile } from '../pages/Profile'
import { New } from '../pages/New'
import {Details} from '../pages/Details'
import {Home} from '../pages/Home'

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/details/:id' element={<Details/>}/>
    </Routes>
  )
}