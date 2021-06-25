import './App.css';
import {HashRouter, Route} from 'react-router-dom'
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';
import { useState } from 'react';

const App = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    return (
        <div>
            <HashRouter>
                <NavBar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
                <Route path='/' exact component={Home}/>
                <Route path='/about' exact component={About}/>
                <Route path='/projects' exact component={Projects}/>
                <Route path='/skills' exact component={Skills}/>
                <Route path='/contact' exact component={Contact}/>
                <GoHome/>
            </HashRouter>
        </div>
    )
}

export default App

