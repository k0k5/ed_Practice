import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import { StartWin } from "./pages/logiPage"



function App(){
  return(
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path='/login' element={<StartWin/>}/>

        </Routes>
      </BrowserRouter>
    

    </>

  )
}

export default App