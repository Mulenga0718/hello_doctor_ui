import React from "react";
import './loginForm.css'
import axios from 'axios';


class LoginForm extends React.Component {

    private refers = {
        dId: React.createRef<any>(),
        pwd: React.createRef<any>(),
    }


    render() {

        return (
            <div id="backimg" >

                <div id="ch">
                    <div id="loginDiv">
                        <ul style={{ paddingRight: '11px' }}>
                            <li>
                                <h1>Hello Doctor</h1>
                            </li>
                            <li></li>
                            <div className="info">
                                <li style={{ display: 'inline-block', float: 'left' }} >
                                    <input type="text" placeholder="아이디" style={{ width: '250px' }} ref={this.refers.dId} />
                                </li>
                                <button type="button" id="firstbtn" className="btn btn-primary " style={{ height: '74px', marginTop: '9px' }} onClick={this.login} >1차 로그인</button>
                                <li style={{ position: 'absolute', marginTop: '-34px' }}><input type="password" placeholder="비밀번호" ref={this.refers.pwd} style={{ width: '250px' }} />
                                </li>
                            </div>
                        </ul>
                        <div className="secondLogin" style={{ display: 'none' }}>
                            <form action="/otpcheck/" method="post">
                                <li style={{ display: 'inline-block', width: '250px', marginRight: '0px', marginTop: '24px' }}>
                                    <input maxLength={6} type="text" placeholder="OTP" name="user_code" style={{ width: '100%' }} />
                                    <input name="encodedKey" type="hidden" readOnly />
                                </li>

                                <li style={{ display: 'inline-block', marginBottom: '0px', width: '89px', marginRight: '0', marginLeft: '8px' }}>
                                    <button type="submit" className="btn btn-primary block full-width m-b" style={{ width: '100%' }}>2차 로그인</button>
                                </li>
                            </form>
                        </div>
                        <li>
                            <h3>
                                <a><small style={{ color: 'white' }}>아이디/비밀번호 찾기</small> </a>
                            </h3>
                        </li>
                        <li style={{ marginRight: '0px' }}>
                            <a className="btn btn-sm btn-white btn-block" href="/ddit/regist/"> 회원가입 </a>
                        </li>
                    </div>
                </div>
            </div>

        );

    };

    login = () => {
        axios.defaults.withCredentials = true;

        const dId = this.refers.dId.current.value;
        const pwd = this.refers.pwd.current.value;

        axios({
            method: "post", // 통신 방식
            headers: { "Content-Type": `application/json`},
            url: "ddit/login/login", // 서버
            data: {
                dId: dId,
                pwd: pwd
            },
        
        })
        .then(function (response) {
            document.location.href = '/ddit/index'
            });
    };
}
export default LoginForm;
