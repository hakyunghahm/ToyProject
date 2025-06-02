import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import ViewPage from "./pages/ViewPage";
import ProfilePage from "./pages/ProfilePage";
import GlobalStyles from './GlobalStyles'


function App(){
  return(
    <BrowserRouter>
    <GlobalStyles/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users/1/profile" element={<ProfilePage />}/>
        <Route path="/:id" element={<ViewPage />} />     
      </Routes>
    </BrowserRouter>
  )
}

export default App;