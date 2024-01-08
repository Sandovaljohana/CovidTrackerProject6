import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home/Home'
import Tracker1 from '../views/Tracker1/Tracker1'


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path='/' />
                    <Route element={<Tracker1 />} path='/Tracker1' />
                </Routes>
            </BrowserRouter>
        </>

    )
}

export default Router