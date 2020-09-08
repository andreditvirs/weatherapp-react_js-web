import React from 'react';
import "./form.style.css";

const Form = props =>{
    return(
        <div className="container">
            <form onSubmit={props.loadWeather}>
                <div className="row mt-5">
                    <div className="col-md-3 offset-md-3">
                        <input type="text" className="form-control" name="city" autoComplete="off" placeholder="Masukkan nama kota"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Masukkan nama negara"/>
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left py-2">
                        <button className="btn btn-info">Cari</button>
                    </div>
                    <div className="col-md-12 mt-2">
                        {props.error ?  error() :null}
                    </div>
                </div>
            </form>
        </div>
    );
}

function error(){
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Masukkan nama kota dan negara terlebih dahulu
        </div>
    );
}

export default Form;