import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import { StartWin } from "./pages/logiPage"
import { MainDirectorWin } from "./pages/mainDirectorPage";


function App(){
  return(
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path='/login' element={<StartWin/>}/>
          <Route path="main" element={<MainDirectorWin/>}/>
        </Routes>
      </BrowserRouter>
    

    </>

  )
}

export default App