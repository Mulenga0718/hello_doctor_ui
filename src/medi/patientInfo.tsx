import React from "react";

const PatientInfo = ({patientinfo}) =>{

    return(
        <div className="bg-primary p-xs b-r-xl" style={{ marginTop: '10px', textAlign: 'center', backgroundColor: '#3492f6 !important' }}>
                            

        {patientinfo.pName }| {patientinfo.pRnum }세 | {patientinfo.pSex } | {patientinfo.pTel }
        | ${patientinfo.pInsurance } | {patientinfo.pAddress }
        </div>
    )
}
export default PatientInfo;