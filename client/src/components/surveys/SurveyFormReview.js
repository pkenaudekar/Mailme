// SurveyFormReview shows ussers thier form inputs for reviews
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from "react-router";
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) =>{
        return(
            <div key={name}>
                <lable><b>{label}</b></lable>
                <div>
                    {formValues[name]}
                </div>
                <br/>
            </div>
        );
    });

    return(
        <div style={{ width: "30vw", margin: "auto", marginTop: "10vh" }}>
            <h5 style={{ textAlign: "center" }}>Please confirm your entries</h5>
            {reviewFields}
            <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
                Back
            </button>
            <button 
            onClick={() => submitSurvey(formValues, history)}
                className="green btn-flat right white-text"
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state){
     return{ formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));