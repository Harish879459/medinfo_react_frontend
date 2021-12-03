import {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from "../LoginComponents/Login";
import UserDashboard from "../UserDashboard/UserDashboard";
import AboutUs from "../About/AboutUs";
import Medicine from "../UserDashboard/Disease/Disease";
// import Doctor from "../UserDashboard/Doctor/Doctor";
// import Hospital from "../UserDashboard/Hospitals/Hospital";
// import UserProfile from "../UserProfile/UserProfile";
import Profile from "../Profile/profile";
import UpdateDoctorProfile from "../Profile/updateprofile";
import MedicineList from "../Medicine/MedicineList";
import AddMedicine from "../Medicine/AddMedicine";
import UpdateMedicine from "../Medicine/UpdateMedicine";
import MedicineDetails from "../Medicine/MedicineDetails";
import ProfileDetails from "../Profile/details";

class RouteHandler extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Login}/>
                <Route path="/user-dashboard" exact component={UserDashboard}/>
                <Route path="/about" exact component={AboutUs}/>
                <Route path="/medicine" exact component={Medicine}/>
                {/* <Route path="/doctor" exact component={Doctor}/> */}
                {/* <Route path="/hospital" exact component={Hospital}/> */}
                {/* <Route path="/user-profile" exact component={UserProfile}/> */}
                <Route path="/user-profile" exact component={Profile}/>
                {/*<Route path="/update-doctor" exact component={UpdateDoctorProfile}/>*/}
                {/*<Route path="/update-user" exact component={UpdateUserProfile}/>*/}
                <Route path="/medicine-list" exact component={MedicineList}/>
                <Route path="/add-medicine" exact component={AddMedicine}/>
                <Route path="/update-medicine/:id" exact component={UpdateMedicine}/>
                <Route path="/medicine-details" exact component={MedicineDetails}/>
                <Route path="/profile-details" exact component={ProfileDetails}/>
            </div>
        )
    }
}

export default RouteHandler;