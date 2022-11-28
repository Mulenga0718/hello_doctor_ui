import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './main.css';

class Main extends React.Component {

    render() {

        return (

            <>
            <div className="gray-bg dashbard-1 light-skin pace-done">
                <div>
                    <nav className="homeee" role="navigation" style={{ marginBottom: '0' }}>
                        <div className="navbar-header"></div>

                        <ul className="nav navbar-top-links navbar-right">
                            <li className="nav-header">
                                <div >
                                    <img src={require("../resources/img/headerLogo2.png")} width="50px" height="50px" style={{marginTop: '-8px', height: '39px' }} alt="로고"  />
                                </div>
                            </li>


                            <li className="dropdown"><Link className="gopage" 
                                to={'/ddit/main'}> <span
                                    style={{ fontWeight: 'bold', width: '92px', marginLeft: '-28px', marginTop: '-6px', fontSize: '15px' }}>Hello
                                    Doctor</span></Link></li>
                            <div className="row"
                                style={{ width: '1150px', textAlign: 'center', fontWeight: 'bold' }}>
                                <li className="dropdown" style={{ marginLeft: '2px', width: '120px' }}>
                                    <Link to={'/ddit/medi/chart'}> <span
                                        className="dropdownspan"
                                        style={{ marginTop: '2px', marginLeft: '23px', width: '35px' }}>
                                        <i className="fa fa-stethoscope" style={{ fontSize: '15px' }}></i>
                                        <p style={{ display: 'inline', fontSize: '15px' }}>진료</p>
                                    </span></Link>
                                </li>

                                <li className="dropdown " style={{ marginLeft: '-8px', width: '120px' }}>
                                    <Link className="gopage"
                                        to={'/ddit/cooperation/coopermain.do'}> <span
                                            className="dropdownspan" style={{ marginTop: '2px', width: '33px' }}>
                                            <i className="fa fa-group" style={{ fontSize: '15px' }}></i>
                                            <p style={{ display: 'inline', fontSize: '15px' }}>협진</p>
                                        </span>
                                    </Link>
                                </li>


                                <li className="dropdown" style={{ marginLeft: '5px', width: '120px' }}>
                                    <Link className="gopage" to={'/scheduler/main.do'}>
                                        <span className="dropdownspan"
                                            style={{ marginTop: '2px', width: '76px', marginLeft: '-3px' }}>
                                            <i className="fa fa-calendar" style={{ fontSize: '15px' }}></i>
                                            <p style={{ display: 'inline', fontSize: '15px' }}>스케줄 </p>
                                        </span>
                                    </Link>
                                </li>


                                <li className="dropdown hoverdown "
                                    style={{ marginLeft: '2px', width: '120px' }}>
                                    <Link to={'/orderset/main.do'}
                                        className="dropdown-toggle count-info gopage"> <span
                                            className="dropdownspan"
                                            style={{ display: 'inline-block', marginTop: '2px', width: '87px', marginLeft: '-3px' }}>
                                            <i className="fa fa-flask" style={{ fontSize: '15px' }}></i>
                                            <p style={{ display: 'inline', fontSize: '15px' }}>오더세트</p>
                                        </span>

                                    </Link>
                                    <ul className="dropdown-menu dropdown-alerts"
                                        style={{ width: '150px', position: 'absolute', top: '42px', left: '19px', willChange: 'top, left' }}>
                                        <li><Link to={'/orderset/orderset_list.do'}>공유오더세트</Link></li>
                                        <li><Link to={'/orderset/myorderset_list.do'}>My오더세트</Link></li>
                                    </ul></li>


                                <li className="dropdown " style={{ marginLeft: '-5px', width: '120px' }}>
                                    <Link className="gopage" to={'/case/main.do'}> <span
                                        className="dropdownspan"
                                        style={{ marginTop: '2px', width: '60px', marginLeft: '-3px' }}>
                                        <i className="fa fa-comments" style={{ fontSize: '15px' }}></i>
                                        <p style={{ display: 'inline', fontSize: '15px' }}>C.D</p>
                                    </span>
                                    </Link>
                                </li>


                                <li className="dropdown " style={{ marginLeft: '2px', width: '120px' }}>
                                    <Link className="gopage" to={'/history/main.do'}>
                                        <span className="dropdownspan"
                                            style={{ marginTop: '2px', width: '90px', marginLeft: '-3px' }}>
                                            <i className="fa fa-history" style={{ fontSize: '15px' }}></i>
                                            <p style={{ display: 'inline', fontSize: '15px' }}>히스토리</p>
                                        </span>
                                    </Link>
                                </li>


                                <li className="dropdown" style={{ marginLeft: '91px' }}>
                                    <Link to={"/"} className="dropdown-toggle count-info" style={{paddingRight: '0px' }} > <span
                                        style={{ marginTop: '2px', width: '90px', marginLeft: '-3px' }}> <i
                                            className="fa fa-sitemap" aria-hidden="true"
                                            style={{ fontSize: '1.2em' }}></i>
                                        <p style={{ display: 'inline', fontSize: '11px' }}>조직도</p></span>
                                     </Link>
                            </li>


                            <li className="dropdown"><Link className="dropdown-toggle count-info"
                                data-toggle="dropdown" to={"/"} style={{paddingLeft: '0px'}}>
                                <span style={{marginTop: '2px', width: '90px', marginLeft: '-3px'}}>
                                    <i className="fa fa-bell" style={{fontSize: '1.2em'}}></i>
                                    <p style={{display: 'inline', fontSize: '11px'}}>알림</p>
                 `               </span>
                            </Link>
                                <ul className="dropdown-menu dropdown-alerts " id="notimenu">
                                    <li className="dropdown-divider"></li>
                                    <li>
                                        <div className="text-center link-block">
                                            <Link to={"notifications.html"}  className="dropdown-item"> <strong>전체
                                                협진 요청조회</strong> <i className="fa fa-angle-right"></i>
                                            </Link>
                                        </div>
                                    </li>
                                </ul></li>


                            <li className="dropdown hoverdown"
                                style={{marginLeft: '0px', marginTop: '-10px'}}><a>
                                    <div className="profile-image" style={{width: '0px', marginRight: '65px'}}>
                                        <img id="profileborder" alt="프로필"
                                            src="/ddit/doctor/getPic?dId=doctors"
                                            style={{width: '60px', height: '60px', border: '2px solid rgb(35, 175, 67)'}}
                                            className="rounded-circle circle-border m-b-md" />
                                                 <i id="profile" className="fa fa-circle"
                                                style={{width: '25px', height: '25px', fontSize: '20px', position: 'absolute', top: '65px', color: 'rgb(220, 53, 69)', left: '46px'}} >
                                                </i>
                                    </div>
                                </a>
                                <ul className="dropdown-menu dropdown-alerts"
                                    style={{width: '150px', position: 'absolute', top: '86px', left: '0px', willChange: 'top, left'}}>
                                    <li><a> <i className="fa fa-circle"
                                        style={{width: '15px', height: '15px', color: '#23af43', fontSize: '15px'}}></i>
                                        <h5 className="profile_change" style={{float: 'right'}}>진료중</h5>
                                    </a></li>
``
                                    <li className="dropdown-divider"></li>
                                    <li><a> <i className="fa fa-circle"
                                        style={{width: '15px', height: '15px', color: '#dc3545', fontSize: '15px'}}></i>
                                        <h5 className="profile_change" style={{float: 'right'}}>수술중</h5>
                                    </a></li>
                                    <li className="dropdown-divider"></li>
                                    <li><a> <i className="fa fa-circle"
                                        style={{width: '15px', height: '15px', color: '#1c84c6', fontSize: '15px'}}></i>
                                        <h5 className="profile_change" style={{float: 'right'}}>자리비움</h5>
                                    </a></li>
                                    <li className="dropdown-divider"></li>
                                    <li><a>
                                        <i className="fa fa-vcard"
                                            style={{width: '15px', height: '15px', fontSize: '17px'}}></i>
                                        <h5 className="profile_change" style={{float: 'right'}}>내 정보</h5>
                                    </a></li>
                                    <li className="dropdown-divider"></li>
                                    <li><a>
                                        <div>
                                            &nbsp;<img alt="로그아웃" src="/ddit/resources/img/logout.png"
                                                style={{width: '17px', height: '17px'}} />
                                                <h5 className="profile_change" style={{float: 'right'}}>로그아웃</h5>
                                        </div>
                                    </a></li>
                                </ul></li>
                        </div>
                    </ul>

                </nav>
            </div>

            </div >
            
            </>
        );
    }
    goPage  = (url) => {
        document.location.href = url;
    }
}

export default Main;