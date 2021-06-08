import React from 'react';
import ReactDOM from 'react-dom';
import {useFormik} from 'formik';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch 
  } from "react-router-dom";
    const validate=values=>{
    const errors ={};
    if(!values.fullname){
        errors.fullname = "*Required";
    }else if(values.fullname.length > 8){
        errors.fullname="*Must be 8 characters or less";
    }

    if(!values.email){
        errors.email ="*Required";
    }else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email ="*Invalid Email";

    }
    if(!values.phone){
        errors.phone ="*Required";
    }else if ( !/^[a-zA-Z0-9-().\s]{10,15}$/.test(values.phone)){
        errors.phone ="*Invalid phone number";

    }
    if(!values.Location){
        errors.Location = "*Required";
    }

    if(!values.address){
        errors.address = "*Required";
    }
    return errors;
}
const Form=()=>{
    const formik =useFormik({
        initialValues :{
            fullname:'',
            email:'',
            phone:'',
            Location:'',
            address:'',

        },
        validate
    });
    
    return( 
        <div class="bck">
        
            <form class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                        <div className="main">
                        <div className="form-wrap">
                        <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <h2 class="heading">Registration Form</h2>
                            </div></div><br/>
                                <form onSubmit={formik.handleSubmit}>
                                <div class="row">
                                <div class="col-md-8 offset-md-2">
                                <input type="text"
                                placeholder="Full Name"
                                name="fullname"
                                class="form-control"
                                onChange={formik.handleChange}
                                value={formik.values.fullname}
                                onBlur={formik.handleBlur}
                                />
                                {formik.touched.fullname && formik.errors.fullname ? <span>{formik.errors.fullname}</span> : null
                                }
                                </div>
                                </div><br/>
                                <div class="row">
                                <div class="col-md-8 offset-md-2">
                                <input type="text"
                                placeholder="Email"
                                name="email"
                                class="form-control"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null
                                }
                                </div>
                                </div><br/>
                                <div class="row">
                                <div class="col-md-8 offset-md-2">
                                <input type="text"
                                placeholder="Phone"
                                name="phone"
                                class="form-control"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                onBlur={formik.handleBlur}
                                />
                                {formik.touched.phone && formik.errors.phone ? <span>{formik.errors.phone}</span> : null
                                }
                                </div>
                                </div><br/>
                                <div class="row">
                                <div class="col-md-8 offset-md-2">
                                <input type="text"
                                placeholder="Location to visit"
                                name="Location"
                                class="form-control"
                                onChange={formik.handleChange}
                                value={formik.values.Location}
                                onBlur={formik.handleBlur}
                                />
                                {formik.touched.Location && formik.errors.Location ? <span>{formik.errors.Location}</span> : null
                                }
                                </div>
                                </div><br/>
                                <div class="row">
                                <div class="col-md-8 offset-md-2">
                                <input type="text"
                                placeholder="Your Address"
                                name="address"
                                class="form-control"
                                onChange={formik.handleChange}
                                value={formik.values.address}
                                onBlur={formik.handleBlur}
                                />
                                {formik.touched.address && formik.errors.address ? <span>{formik.errors.address}</span> : null
                                }
                                </div>
                                </div><br/>
                                <div class="row">
                                <div class="col-md-8 offset-md-2">
                                <input type="submit"
                                class="btn btn-success"
                                value="Submit"/>
                                </div></div>
                                </form>
                        </div>
                    </div>
                </div>
            </div> 
            </form>       
          </div>
                      
                    
    )
}
export default Form;

