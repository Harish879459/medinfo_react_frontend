import {Component} from "react";

class DiseaseDetails extends Component {
    render() {
        const {state} = this.props.location;
        return (
            <div>
                <div className="card">
                    <div className="jumbotron">
                        <h4>Medicine Details</h4>
                        <hr/>
                        <p><label htmlFor="" style={{float: "left"}}>Medicine Name</label>
                            <input type="text" value={state.name} disabled className='form-control btn-sm '/></p>
                        <p><label htmlFor="" style={{float: "left"}}>Medicine Uses</label>
                            <input type="text" value={state.uses} disabled className='form-control btn-sm'/></p>
                        <p>
                            <label htmlFor="" style={{float: 'left'}}>Description</label>
                            <textarea name="" id="" cols="30" rows="5" value={state.description}
                                      className='form-control btn-sm' disabled></textarea>
                        </p>
                        {/* <p>
                            <label htmlFor="" style={{float: 'left'}}>Causes</label>
                            <textarea name="" id="" cols="30" rows="5" value={state.mildCauses}
                                      className='form-control btn-sm' disabled></textarea>
                            <textarea name="" id="" cols="30" rows="5" value={state.severeCauses}
                                      className='form-control btn-sm' disabled></textarea>
                        </p>

                        <p>
                            <label htmlFor="" style={{float: 'left'}}>Preventive Measures</label>
                            <textarea name="" id="" cols="30" rows="5" value={state.preventiveMeasures}
                                      className='form-control btn-sm' disabled></textarea>
                        </p>
                        <p>
                            <label htmlFor="" style={{float: 'left'}}>Edible food During Disease </label>
                            <textarea name="" id="" cols="30" rows="5" value={state.eatables}
                                      className='form-control btn-sm' disabled></textarea>
                        </p> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default DiseaseDetails;