import {BrowserRouter, Route,Switch,Redirect} from 'react-router-dom'
import ScrollToTop from "./components/Scroll"
import AppNav from "./components/AppNav"
import Footer  from "./components/Footer"
import  Services  from "./components/Services"
import AppointmentForm from "./components/AppointmentForm"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import WhatsApp from './components/WhatsAp'


const App=()=> (
  <BrowserRouter>
      
      <AppNav />
    
    <Switch >
    <Route exact path="/" render={() => <Redirect to="/home" />} />
    <Route exact path="/home" component={Home}/>
    <Route exact path="/services" component={Services}/>
    <Route exact path="/about" component={AboutUs}/>
    <Route exact path="/contact" component={ContactUs}/>
    <Route exact path="/appointment" component={AppointmentForm}/>
    </Switch>
    
    <Footer />
    <WhatsApp />

    <ScrollToTop />
  
  </BrowserRouter>
)

export default App;

