import {Component} from "react";
import IconSocial from "../IconsSocial/IconSocial";

class LoginText extends Component {
    render() {
        return (
            <div>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Welcome to MedInfo</h2>
                        <p>Get Your Medicine Information Here.</p>
                        <br/>
                        <p>Connect with us on</p>
                        <IconSocial></IconSocial>
                    </div>
                </div>

            </div>
        );
    }
}

export default LoginText;