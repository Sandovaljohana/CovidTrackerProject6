import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home/Home'
import Tracker1 from '../views/Tracker1/Tracker1'
import Tracker2 from '../views/Tracker2/Tracker2'
import Tracker3 from '../views/Tracker3/Tracker3'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path='/' />
                    <Route element={<Tracker1 />} path='/Tracker1' />
                    <Route element={<Tracker2 />} path='/Tracker2' />
                    <Route element={<Tracker3 />} path='/Tracker3' />
                </Routes>
            </BrowserRouter>
        </>

    )
}

export default Router