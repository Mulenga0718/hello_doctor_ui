import axios from "axios";
import moment from "moment";
import React from "react";
import "../resources/css/plugins/blueimp/css/blueimp-gallery.min.css";
import "../resources/css/plugins/sweetalert/sweetalert.css";
import "./chart.css"
import Accordion from 'react-bootstrap/Accordion';
import {
    AsyncTypeahead
} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

type appProps = {};

type appState = {
    patientInfo: {},
    taNo: any,
    patient: [],
    pastreco: [],
    orderset: [],
    orderdruglist: [],
    pastPic: [],
    pastFile: [],
    pastsymptom: {},
    subDlist: [],
    orderList: [],
    isLoading: boolean,
    isLoading2: boolean,
    options: [],
    options2: any,
    diseaseResult: any,
    medicineResult: any,
    diseasename: string,
    medicinename: string,

}
class Chart extends React.Component<appProps, appState> {


    private refers = {
        diseaseInput: React.createRef<any>(),
        medicineInput: React.createRef<any>(),
    }

    constructor(props: appState) {

        super(props);
        this.state = {
            patientInfo: {},
            taNo: null,
            patient: [],
            pastreco: [],
            orderset: [],
            orderdruglist: [],
            pastPic: [],
            pastFile: [],
            pastsymptom: {},
            subDlist: [],
            orderList: [],
            isLoading: false,
            isLoading2: false,
            options: [],
            options2: [],
            diseaseResult: [],
            medicineResult: [],
            diseasename: '',
            medicinename: '',
        }

    }
    private filterBy = () => true;


    componentDidMount(): void {

        this.getPatientInfo();
    }

    render() {
        return (
            <div className="light-skin pace-done">
                <div id="top">
                    <div id="info">
                        <this.PatientInfo patientinfo={this.state.patientInfo} taNo={this.state.taNo} />
                    </div>

                    <div id="buttonframe">
                        <p style={{ textAlign: 'right' }}>


                            <button className="btn  btn-warning">
                                <i className="fa fa-handshake-o">예약확인</i>
                            </button>

                            <button className="btn  btn-info ">
                                <i className="fa fa-handshake-o">협진요청</i>
                            </button>
                            <button className="btn btn-success  demo4">

                                <i className="fa fa-sign-out ">진료완료</i>
                            </button>
                        </p>
                    </div>
                </div>
                <div id="right">
                    <div id="pastchart">
                        <div className="ibox" style={{ marginBottom: '0' }}>
                            <div className="bg-primary p-xs b-r-xl titlediv" id="pasttitle">
                                이전
                                진료 기록 없음

                            </div>
                            <div className="ibox-content" id="pastrecord" style={{ textAlign: "left", paddingLeft: 10 }}>
                                <this.PastSymptom
                                    pastSymptom={this.state.pastsymptom}
                                />
                                <this.PastPic
                                    pic={this.state.pastPic}
                                />
                                <this.PastFile
                                    pastFile={this.state.pastFile}
                                />
                            </div>
                            <div className="bg-primary p-xs b-r-xl titlediv">이전 진단</div>
                            <div className="ibox-content" style={{ height: '50px' }}>
                                <table className="table table-bordered recordresult">
                                    <tbody id="pastdiseasebody">
                                        <this.PastmainDisease
                                            pastsymptom={this.state.pastsymptom}

                                        />
                                        <this.PastSubDisease
                                            subDlist={this.state.subDlist}
                                        />

                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-primary p-xs b-r-xl titlediv">이전 처방</div>
                            <div className="ibox-content" style={{ height: '94px' }}>

                                <table className="table table-bordered medicine">

                                    <tbody id="pastdrug">

                                        <this.PastDrugList
                                            orderdruglist={this.state.orderdruglist}

                                        />
                                    </tbody>
                                </table>


                            </div>

                            <div id="orderset">
                                <div className="tabs-container">
                                    <div className="bg-primary p-xs b-r-xl titlediv">오더세트</div>
                                    <div className="panel-body" id="ordersetbody">

                                        <Accordion defaultActiveKey="0">
                                            <this.Orderset
                                                orderset={this.state.orderset}
                                            />
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div id="middle">

                    <div id="chart">
                        <div className="ibox" style={{ marginBottom: '0' }}>

                            <div className="bg-primary p-xs b-r-xl titlediv">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 진료 차트


                                <button data-toggle="dropdown" className="btn btn-circle"
                                    type="button" id="automodify">
                                    <i className="fa fa-ellipsis-v"></i>
                                    <ul className="dropdown-menu float-right" x-placement="bottom-start"
                                        style={{ position: 'absolute', top: '35px', left: '882px', willChange: 'top, left' }}>
                                        <li><span>진료 폼 수정</span></li>
                                    </ul>

                                </button>

                                <button className="btn btn-circle " id="autocomplete">
                                    <i className="fa fa-pencil-square-o"></i>
                                </button>
                            </div>
                            <div className="ibox-content" id="chartbox">

                                <textarea name="chart" id="textform"
                                    className="form-control border-left"
                                    spellCheck="false">

                                </textarea>

                            </div>
                        </div>


                    </div>

                    <div className="underchart">
                        <div className="ibox" style={{ marginBottom: '0' }}>

                            <div className="bg-primary p-xs b-r-xl titlediv">진단</div>
                            <div className="ibox-content" style={{ height: '170px' }}>

                                <AsyncTypeahead
                                    style={{ width: '70%', display: 'inline-block', marginLeft: '30px', marginTop: '10px', marginBottom: '10px', }}
                                    filterBy={this.filterBy}
                                    id='diseaseInput'
                                    isLoading={this.state.isLoading}
                                    minLength={3}
                                    labelKey='deKo'
                                    onSearch={this.diseaseSearch}
                                    options={this.state.options}
                                    onChange={this.diseaseOnchange}
                                    placeholder="진단명을 입력해 주세요"
                                    ref={this.refers.diseaseInput}

                                    renderMenuItemChildren={(option: any) => (
                                        <>
                                            <div>
                                                <span>{option}</span>
                                            </div>
                                        </>
                                    )}
                                />

                                <button className="btn btn-info " id="dieaseRegist" onClick={this.diseaseregist}>
                                    <i className="fa fa-check"></i>&nbsp;등록
                                </button>



                                <table className="table table-bordered recordresult">
                                    <thead>
                                        <tr>
                                            <th className="diseasename">상병명</th>
                                            <th colSpan={2}>상병 구분</th>

                                        </tr>
                                    </thead>
                                    <tbody id="diseaseresult">
                                        <this.DiseaseInput diseasename={this.state.diseaseResult} />

                                    </tbody>
                                </table>


                            </div>

                            <div className="ibox" style={{ marginBottom: '0' }} id="prescriptionbox">

                                <div className="bg-p
                                    rimary p-xs b-r-xl titlediv">
                                    &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  처방 <span
                                        className="btn btn-danger btn-rounded" id="dur">DUR</span><span
                                            className="clear"></span>
                                </div>

                                <div className="ibox-content" style={{ height: '100%', paddingTop: '10px' }}>
                                    <AsyncTypeahead
                                        style={{ width: '70%', display: 'inline-block', marginLeft: '30px', marginTop: '10px', marginBottom: '10px' }}
                                        filterBy={this.filterBy}
                                        id='medicineInput'
                                        isLoading={this.state.isLoading2}
                                        minLength={3}
                                        labelKey='meName'
                                        ref={this.refers.medicineInput}
                                        onSearch={this.medicineSearch}
                                        onChange={this.medicineOnchange}
                                        options={this.state.options2}
                                        placeholder="의약품명을 입력해 주세요"

                                        renderMenuItemChildren={(option2: any) => (
                                            <>
                                                <span>{option2.meName}</span>
                                            </>
                                        )}
                                    />

                                    <button className="btn btn-info " id="drugRegist" onClick={this.medicineregist}
                                    >
                                        <i className="fa fa-plus-circle"></i>&nbsp;추가
                                    </button >
                                    <table className="table table-bordered medicine">
                                        <thead>
                                            <tr>
                                                <th className="mediname">약명</th>
                                                <th>수량</th>
                                                <th>일투수</th>
                                                <th colSpan={2}>투약일</th>

                                            </tr>
                                        </thead>
                                        <tbody id="medicineresult">
                                            <this.MedicineInput medicine={this.state.medicineResult} />
                                        </tbody>
                                    </table>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div id="left">

                    <div id="inputpic">
                        <div className="ibox" style={{ height: '100% !important' }}>
                            <div className="bg-primary p-xs b-r-xl titlediv">자료 등록</div>
                            <div className="ibox-content"
                                style={{ textAlign: 'center', paddingTop: '5px', height: '92%' }}>
                                <button className="btn btn-info" style={{ width: '30%' }}
                                >
                                    <i className="fa fa-camera">촬영</i>
                                </button>
                                <button className="btn btn-info" style={{ width: '30%' }}
                                >
                                    <i className="fa fa-file-image-o">등록</i>
                                </button>
                                <button className="btn btn-info" style={{ width: '30%' }}
                                >
                                    <i className="fa fa-upload">등록</i>
                                </button>
                                <div className="hr-line-dashed"></div>
                                <div className="lightBoxGallery" id="lightBoxGallery">


                                </div>

                                <div id="fileupload"></div>
                                <div></div>

                            </div>
                        </div>
                    </div>

                    <div id="recordlist">
                        <div className="ibox">
                            <div className="bg-primary p-xs b-r-xl titlediv">진료 내역</div>
                            <div className="ibox-content">
                                <table className="table table-bordered" id="recordtable">

                                    <tbody>
                                        <this.Recordtable
                                            pastreco={this.state.pastreco}
                                        />
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                    <div id="wating" className="main">
                        <div className="ibox">
                            <div className="bg-primary p-xs b-r-xl titlediv">
                                &nbsp; &nbsp; &nbsp;외래 대기 환자 <span className="fa fa-refresh reload" ></span>
                            </div>

                            <div className="ibox-content" style={{ height: '251px' }}>

                                <table className="table" id="watingtable">
                                    <thead>

                                        <tr>
                                            <th id="order"></th>
                                            <th>성명</th>
                                            <th>주민번호</th>
                                            <th>비고</th>
                                        </tr>
                                    </thead>
                                    <tbody id="reloadPatient">
                                        <this.Watingtable
                                            patient={this.state.patient}
                                        />
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }




    private druglist = (moNo, number) => {
        let here = "drughandle" + number;

        const config = {
            headers: { 'Content-Type': 'application/json' },
            params: {
                'moNo': moNo
            }
        }

        const success = (response) => {

            this.setState({ orderList: response.data })
        }

        axios.get('/ddit/medi/orderlist', config).then(success)


    }
    private pastchart = (mno) => {

        const config = {
            headers: { 'Content-Type': 'application/json' },
            params: {
                mNo: mno,
            }
        }
        const success = (response) => {

            document.getElementById('pasttitle')!.innerText = moment(response.data.pastsymptom.mdate).format('yyyy-MM-DD');

            this.setState({ orderdruglist: response.data.orderdruglist, pastFile: response.data.file, pastPic: response.data.pic, pastsymptom: response.data.pastsymptom, subDlist: response.data.sub_dlist })
        }

        axios.get('/ddit/medi/pastreco', config).then(success);

    }

    private getPatientInfo = () => {

        const success = (response) => {
            this.setState({
                patientInfo: response.data.patientinfo,
                taNo: response.data.taNo,
                patient: response.data.patient,
                pastreco: response.data.pastreco,
                orderset: response.data.orderset
            });
        }
        axios.get('chart').then(success)

    }
    private detailImg = (mpNo) => {

    }
    private fileDownload = (mfNo) => {
        document.location.href = 'getFile?mfNo=' + mfNo;
    }

    private diseaseSearch = (text: string) => {
        this.setState({ isLoading: true, diseasename: text })
        const requestParam = {
            deKo: text,
        }

        const success = (response) => {
            this.setState({ options: response.data.map((m) => m.deKo) })
        }

        const doFinally = () => {
            this.setState({ isLoading: false });
        }
        axios.post('/ddit/medi/searchdisease', requestParam).then(success).finally(doFinally);

    }



    private medicineSearch = (text: string) => {
        this.setState({ isLoading: true })

        const requestParam = {
            meName: text,
        }

        const success = (response) => {
            this.setState({ options2: response.data })
        }

        const doFinally = () => {
            this.setState({ isLoading2: false });
        }
        axios.post('/ddit/medi/searchmedicine', requestParam).then(success).finally(doFinally);

    }

    private diseaseregist = () => {
        let validateCheck = true;
        let diseasename = this.state.diseaseResult;

        let transfer = this.state.diseasename.replace(/,/gi, "");

        this.state.diseaseResult.forEach((e) => {
            if (e === transfer) {
                validateCheck = false;
                return alert('중복된 진단명입니다.');
            }
        })
        if (validateCheck) {
            diseasename.push(transfer);
            this.setState({ diseaseResult: diseasename })
        }
        this.refers.diseaseInput.current.clear();
    }

    private diseaseOnchange = (input) => {

        this.setState({ diseasename: input[0] });

    }

    private onClickRemoveDisease = (e) => {
        let restDisease = this.state.diseaseResult.filter((f) =>
            f !== e.target.parentNode.parentNode.parentNode.firstChild.innerText
        )

        this.setState({ diseaseResult: restDisease });

    }

    private medicineregist = () => {
        let validateCheck = true;
        let medicineName = this.state.medicineResult;
        let transfer = this.state.medicinename.replace(/,/gi, "");
        medicineName.forEach((e) => {
            if (e === transfer) {
                validateCheck = false;
                return alert('중복된 처방입니다.');
            }
        })
        if (validateCheck) {
            medicineName.push(transfer);
            this.setState({ medicineResult: medicineName })
        }
        this.refers.medicineInput.current.clear();

    }

    private medicineOnchange = (input) => {

        this.setState({ medicinename: input[0].meName });

    }

    private onClickRemoveMedicine = (e) => {

        let restMedicine = this.state.medicineResult.filter((f) =>
            f.meName !== e.target.parentNode.parentNode.parentNode.firstChild.innerText
        )
        this.setState({ medicineResult: restMedicine });

    }
    private medicineMove = (id: string) => {
        let validateCheck = true;
        const elementId = 'drugremove' + id;


        const medicineResult = {
            meName: document.getElementById(elementId)?.childNodes[0].textContent,
            quantity: document.getElementById(elementId)?.childNodes[1].textContent,
            dgAday: document.getElementById(elementId)?.childNodes[2].textContent,
            dgDays: document.getElementById(elementId)?.childNodes[3].textContent,
        }

        let medicineName = this.state.medicineResult;
        medicineName.forEach((e) => {
            if (e.meName === medicineResult.meName) {
                validateCheck = false;
                return alert('중복된 처방입니다.');
            }
        })
        if (validateCheck) {
            medicineName.push(medicineResult);
            this.setState({ medicineResult: medicineName })
        }

    }

    private medicinesMove = (moNo) => {


        const config = {
            headers: { 'Content-Type': 'application/json' },
            params: {
                'moNo': moNo
            }
        }

        const success = (response) => {
            let validateCheck = true;
            let medicineName = this.state.medicineResult;


            response.data.forEach((r) =>
                medicineName.forEach((e) => {
                    if (e === r.meName) {
                        validateCheck = false;
                        return alert('중복된 처방입니다.');
                    }
                })
            )
            if (validateCheck) {


                response.data.forEach((m) => {
                    let medicineResult = {
                        meName: m.odrug,
                        quantity: m.pquantity,
                        dgAday: m.paday,
                        dgDays: m.pdays,
                    }
                    medicineName.push(medicineResult);

                }

                )

                this.setState({ medicineResult: medicineName })
            }

        }

        axios.get('/ddit/medi/orderlist', config).then(success)
    }
    PastmainDisease = ({ pastsymptom }) => {

        return (
            <tr>
                <td>{pastsymptom.dname}</td>
                <td className="secondpastresult"> 	주상병 	  </td>
            </tr>

        )

    }
    Orderset = ({ orderset }) => {


        return (

            orderset.map((i, index) =>


                <Accordion.Item eventKey={index}>
                    <Accordion.Header onClick={() => { this.druglist(i.moNo, index) }}  >
                        <h5 className="mb-0">

                            {i.otitle}
                            <i className="fa fa-medkit" onClick={() => { this.medicinesMove(i.moNo) }}></i><span
                                className="clear"></span>
                        </h5>
                    </Accordion.Header>
                    <Accordion.Body id={"collapse" + index} >
                        <div className="card-body">
                            <table className="table table-bordered medicine" >
                                <tbody id={"drughandle" + index}>
                                    <this.OrderList
                                        orderList={this.state.orderList}

                                    />
                                </tbody>

                            </table>

                        </div>
                    </Accordion.Body>
                </Accordion.Item>

            )

        )
    }


    Recordtable = ({ pastreco }) => {

        return (
            pastreco.map((i) =>

                <tr>
                    <td className="recordtablelist" onClick={() => { this.pastchart(i.mno) }}>{moment(i.mdate).format('yyyy-MM-DD')}</td>

                </tr>

            )


        )
    }
    Watingtable = ({ patient }) => {

        return (

            patient.map((i, index) =>
                <tr>
                    <td>{index + 1}</td>
                    <td>{i.pname}
                        {i.taNo !== null && <i className="fa fa-users"></i>}
                    </td>
                    <td>{i.prnum}</td>
                    <td>{i.rsvName}</td>
                </tr>
            )


        )
    }
    PatientInfo = ({ patientinfo, taNo }) => {

        return (
            <div className="bg-primary p-xs b-r-xl" style={{ marginTop: '10px', textAlign: 'center', backgroundColor: '#3492f6 !important' }}>


                {patientinfo.pname} {taNo !== null && <i className="fa fa-users" style={{ color: 'black' }}></i>}|


                {patientinfo.prnum}세 | {patientinfo.psex} | {patientinfo.ptel}
                | {patientinfo.pinsurance} | {patientinfo.paddress}
            </div>
        )
    }

    PastDrugList = ({ orderdruglist }) => {
        return (
            orderdruglist.map((i) =>

                <tr className="medicinemove" >
                    <td className="drugName">{i.cureName}</td>
                    <td>{i.pquantity}</td>
                    <td>{i.pdays}</td>
                    <td>{i.paday}</td>
                </tr>
            )


        )
    }
    Pastmaindisease = ({ pastsymptom }) => {
        return (
            <tr>
                <td>{pastsymptom.dname}</td>
                <td className="secondpastresult"> 	주상병 	  </td>
            </tr>

        )
    }

    PastSubDisease = ({ subDlist }) => {

        return (
            subDlist.map((i) =>

                <tr>
                    <td>{i.subdname}</td>
                    <td className="secondpastresult"> 부상병 	  </td>
                </tr>


            )

        )
    }
    PastSymptom = ({ pastSymptom }) => {

        return (
            <div dangerouslySetInnerHTML={{ __html: pastSymptom.symptom }} >


            </div>
        )
    }

    PastPic = ({ pic }) => {

        return (pic.map((i) =>

            <div className='pastimg' style={{ background: 'url(/ddit/medi/getPic?mpNo=' + i.mpNo + ')' }} onClick={this.detailImg.bind(i.mpNo)}></div>
        )
        )

    }
    PastFile = ({ pastFile }) => {

        return (pastFile.map((i) =>

            <div className="file" onClick={this.fileDownload.bind(i.mfNo)}>

                <span className="corner"></span>

                <div className="icon">
                    <i className="fa fa-file"></i>
                </div>
                <div className="file-name">
                    {i.mfFilename}
                </div>

            </div>

        )
        )

    }
    OrderList = ({ orderList }) => {

        return (


            orderList.map((i, index) =>
                <tr id={"drugremove" + index} className="medicinemove" onClick={() => { this.medicineMove(index) }} >
                    <td className="drugName">{i.odrug}</td>
                    <td>{i.pquantity}</td>
                    <td>{i.paday}</td>
                    <td>{i.pdays}</td>
                </tr>
            )
        )
    }

    DiseaseInput = ({ diseasename }) => {

        return (

            diseasename.map((m) =>
                <tr>
                    <td className="diseaseNames">{m}
                    </td>
                    <td className="secondresult" style={{ borderRight: 'none' }} ><select className="form-control selectbox" >
                        <option value='주상병'  >주상병</option>
                        <option value='부상병'>부상병</option>
                    </select></td>
                    <td style={{ borderLeft: 'none' }}><button type="button" className="close" aria-label="Close" onClick={this.onClickRemoveDisease}>
                        <span aria-hidden="true" className="closebutton">&times;</span>
                    </button></td>
                </tr>
            )
        )

    }
    MedicineInput = ({ medicine }) => {

        return (

            medicine.map((m) =>
                <tr>
                    <td className="drugName">{m.meName !== undefined ? m.meName : m}</td>
                    <td>
                        <input type="number" className="form-control number" defaultValue={m.quantity !== undefined ? m.quantity : 1}
                            min="1" /></td>
                    <td><input type="number" className="form-control number" defaultValue={m.dgAday !== undefined ? m.dgAday : 1} min="0" /></td>
                    <td style={{ borderRight: 'none' }}><input type="number"
                        className="form-control number" defaultValue={m.dgDays !== undefined ? m.dgDays : 1} min="0" /></td>
                    <td style={{ borderLeft: 'none' }}><button type="button"
                        className="close" aria-label="Close" onClick={this.onClickRemoveMedicine}>
                        <span aria-hidden="true" className="closebutton">&times;</span>
                    </button></td>
                </tr>

            )
        )

    }

}

export default Chart;





