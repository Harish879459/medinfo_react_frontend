import {Component} from "react";
import '../Style/text-custom.css';
import axios from "axios";


class UpdateDisease extends Component {


    state = {
        name: '',
        uses: '',
        description: '',
        mildCauses: '',
        severeCauses: '',
        preventiveMeasures: '',
        medicines: '',
        eatables: '',
        disease: {},

        config: {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        },
    }

    inputHandler = (e) => {
        this.setState({
            disease: {...this.state.disease, [e.target.name]: e.target.value}
        });
    };

    componentDidMount() {

        const {id} = this.props.match.params;
        axios.get(`http://localhost:3000/api/findOneMedicineById/${id}`, this.state.config).then((response) => {
            // console.log(response.data);
            this.setState({
                disease: response.data.data
            })
        })
    }

    handleUpdate = (e) => {
        e.preventDefault();
        const config = {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }
        const diseaseId = this.state.disease._id;
        axios.put(`http://localhost:3000/api/updateMedicine/${diseaseId}`, this.state.disease, config)
            .then((response) => {
                if (response.data.success == true) {
                    window.location.href = '/medicine-list'
                    console.log("DiseaseID" + response.data);
                    alert("Disease Information Updated");
                } else {
                    alert("Error Deleting Disease");
                }
            })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header alert-info">Update Medicine</div>
                                <div className="card-body">
                                    <div className="container">

                                        <div className="row small">
                                            <div className="col-sm-12">
                                                <ul style={{listStyle: "none"}}>
                                                    <li><a href="/user-dashboard"> Go to
                                                        Dashboard </a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <form action="">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label htmlFor="" style={{float: "left"}}
                                                                       className='small font-weight-bold'>Medicine
                                                                    Name</label>
                                                                <input type="text" name='name'
                                                                       className='form-control text-custom'
                                                                       value={this.state.disease.name}
                                                                       onChange={this.inputHandler}
                                                                       placeholder='Disease Name'/>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <label htmlFor="" style={{float: "left"}}
                                                                       className='small font-weight-bold'>Uses
                                                                    </label>
                                                                <input type="text" name='uses'
                                                                       className='form-control text-custom'
                                                                       value={this.state.disease.uses}
                                                                       onChange={this.inputHandler}
                                                                       placeholder='Disease Type'/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <label htmlFor="" style={{float: "left"}}
                                                                       className='small font-weight-bold'>Description</label>
                                                                <textarea name='description'
                                                                          className='form-control text-custom'
                                                                          placeholder='Description'
                                                                          onChange={this.inputHandler}
                                                                          value={this.state.disease.description}
                                                                          rows='5'/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    

                                                   
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <button className='btn btn-success btn-sm'
                                                                                onClick={this.handleUpdate}
                                                                                style={{float: "left"}}>Update
                                                                            Medicine
                                                                        </button>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        {/*<button className='btn btn-sm btn-danger small'*/}
                                                                        {/*        onClick={(event) => {*/}
                                                                        {/*            if (window.confirm('Are you sure ?'))*/}
                                                                        {/*                this.handleDelete(disease._id)*/}
                                                                        {/*        }}*/}
                                                                        {/*        style={{float: "right"}}>Delete*/}
                                                                        {/*</button>*/}
                                                                    </div>
                                                                </div>
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

export default UpdateDisease;