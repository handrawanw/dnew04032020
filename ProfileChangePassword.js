import React,{useState} from 'react';
import {CheckPassword} from "./ProfileChangePasswordFunction";

import Swal from "sweetalert2";

function ProfileChangePassword() {
  const [info,setInfo]=useState({});
  const [pesan,setPesan]=useState();
  function save(event){
    info[event.target.name]=event.target.value;
  }


  function filterData(e){
    e.preventDefault();
    let hasilLogic=CheckPassword(info);
    hasilLogic.then(res=>{
      Swal.fire({
        icon: 'success',
        title: "Password memenuhi syarat",
        showConfirmButton: false,
        timer: 1500,
      });
    }).catch(err=>{
      
      Swal.fire({
        icon: 'error',
        title: err,
        showConfirmButton: false,
        timer: 1500,
      });

    });
  }

//Rahasia@112
    return (
        <div className="page-wrapper">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div className="page-title-box">
                    <div className="float-right">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>
                        <li className="breadcrumb-item"><a href="javascript:void(0);">User</a></li>
                        <li className="breadcrumb-item active">Change Password</li>
                      </ol>{/*end breadcrumb*/}
                    </div>{/*end /div*/}
                    <h4 className="page-title">Change Password</h4>
                  </div>{/*end page-title-box*/}
                </div>{/*end col*/}
              </div>{/*end row*/}
              {/* end page title end breadcrumb */}
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-12" style={{margin: 0, padding: '8px'}}>
                      <div className="card">
                        <div className="card-body col-lg-8 mx-auto">
                          <h3 className="mb-4" align="center">Change Password</h3>
                          <form className="card-box">
                            <div className="form-group row">
                              <div className="col-md-12">
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock" /></span>
                                  </div>
                                  <input type="password" id="example-input1-group1" name="old_password" onChange={save} className="form-control" placeholder="Old Password" />
                                </div>
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="col-md-12">
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock" /></span>
                                  </div>
                                  <input type="password" id="example-input2-group2" name="password" onChange={save} className="form-control" placeholder="Password" />
                                </div>
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="col-md-12">
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock" /></span>
                                  </div>
                                  <input type="password" id="example-input3-group3" name="confirm_password" onChange={save} className="form-control" placeholder="Confirm Password" />
                                </div>
                              </div>
                            </div>

                            <div style={{color:"green"}}>
                              {pesan}
                            </div>

                            <div className="form-group row">
                              <div className="col-md-12">
                                <button className="btn btn-primary btn-sm px-4 mt-3 float-right mb-0" onClick={filterData}>Save Changes</button>
                              </div>
                            </div>
                          </form>
                        
                        </div>                                            
                      </div>
                    </div> {/*end col*/}                                          
                  </div>{/*end row*/}                            
                </div>{/*end col*/}
              </div>{/*end row*/}
            </div>{/* container */}
          </div>
          {/* end page content */}
        </div>
    )
}

export default ProfileChangePassword;