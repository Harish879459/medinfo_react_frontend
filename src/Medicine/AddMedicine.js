import {Component} from "react";
import '../Style/text-custom.css';
import axios from "axios";
import {Alert} from "reactstrap";


class AddDisease extends Component {

    state = {
        name: '',
        uses: '',
        description: '',
       
        userId:localStorage.getItem('id'),

        visible: false,

        diseaseNameError: '',
        descriptionError: '',
        mildCausesError: '',
        severeCausesError: '',
        preventiveMeasuresError: '',
        medicinesError: '',
        eatablesError: '',

        config: {
            headers: {'Authorization': "Bearer " + localStorage.getItem('token')}
        }
    }



    validation = () => {
        let diseaseNameError = '';
        let descriptionError = '';
        let mildCausesError = '';
        let severeCausesError = '';
        let preventiveMeasuresError = '';
        let medicinesError = '';
        let eatablesError = '';

        if (!this.state.name) {
            diseaseNameError = 'Require';
        } else if (!this.state.description) {
            descriptionError = 'Required';
        } else if (!this.state.mildCauses) {
            mildCausesError = 'Required';
        } else if (!this.state.severeCauses) {
            severeCausesError = 'Required';
        } else if (!this.state.preventiveMeasures) {
            preventiveMeasuresError = 'Required';
        } else if (!this.state.medicines) {
            medicinesError = 'Required';
        } else if (!this.state.eatables) {
            eatablesError = 'Required';
        }
        if (diseaseNameError || descriptionError || mildCausesError || severeCausesError || preventiveMeasuresError || medicinesError || eatablesError) {
            this.setState({
                diseaseNameError,
                descriptionError,
                mildCausesError,
                severeCausesError,
                preventiveMeasuresError,
                medicinesError,
                eatablesError
            })
            return false;
        }
        return true;
    };

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    toggle = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    addDisease = (event) => {
        event.preventDefault();
        const isValid = this.validation();
        const id = localStorage.getItem("id");
        if (isValid) {
            axios.post('http://localhost:3000/api/addMedicine', this.state, this.state.config)
                .then((response) => {
                    console.log(response)
                    if (response.data.success==true) {
                        window.location.href='/medicine-list';
                        this.setState({
                            name: '',
                            uses: '',
                            description: '',
                            visible: true
                        })
                    }

                }).catch((err) => console.log(err));
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">

                                <div className="card-header alert-info">Add Medicine</div>
                                <div className="card-body">
                                    <div className="container">
                                        {
                                            this.state.visible ?
                                                <Alert color='success' toggle={this.toggle.bind(this)}
                                                       isOpen={this.state.visible}>Medicine Added
                                                </Alert> : <Alert color='danger' toggle={this.toggle.bind(this)}
                                                                  isOpen={this.state.visible}>Error Adding Medicine</Alert>
                                        }
                                        <div className="row small">
                                            <div className="col-sm-12">
                                                <ul style={{listStyle: "none"}}>
                                                    <p style={{fontSize: '12px', textDecoration: 'bold'}}><a
                                                        href="/user-dashboard">Go
                                                        to <i className='fa fa-dashboard'> Dashboard</i></a></p>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <form action="">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <input type="text" name='name'
                                                                       onChange={this.inputHandler}
                                                                       className='form-control text-custom'
                                                                       placeholder='Medicine Name'/>
                                                                <span className='small' id='usernameError' style={{
                                                                    color: "red",
                                                                    float: "left"
                                                                }}>{this.state.diseaseNameError}</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <input type="text" name='uses'
                                                                       onChange={this.inputHandler}
                                                                       className='form-control text-custom'
                                                                       placeholder='Uses'/>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <textarea name='description'
                                                                          onChange={this.inputHandler}
                                                                          className='form-control text-custom'
                                                                          placeholder='Description'
                                                                          rows='5'/>
                                                                <span className='small' id='usernameError' style={{
                                                                    color: "red",
                                                                    float: "left"
                                                                }}>{this.state.descriptionError}</span>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="row" style={{float: 'left'}}>
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <button
                                                                    type="submit"
                                                                    id='btn'
                                                                    title='Click to register'
                                                                    className="btn btn-info btn-sm form-control small"
                                                                    onClick={this.addDisease}>
                                                                    Add Medicine
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddDisease;