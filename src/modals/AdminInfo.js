import React from 'react'


 const AdminInfo = ({detail,showInfo,showEdit,adminData}) => {
    return (
        <div className="bg-modal" style={{display: detail ? 'flex' : 'none' }}>
            <div className="modal-content" >
                <div className="close" onClick={function(event){showInfo()}}>+</div>
                <img width="100px" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg" height="100px" id="avaInfo"/>
                <form action>
                <table>
                    <tbody>
                    <tr>
                    <td>AdminID</td>
                        {/* <td>{adminData.id}</td> */}
                        <td>01</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        {/* <td>{adminData.Full_name}</td> */}
                        <td>Nguyen Thi Thanh Xuan</td>
                    </tr>
                    <tr>
                    <td>Gmail</td>
                        {/* <td>{adminData.Email}</td> */}
                        <td>thxuan2702@gmail.com</td>
                    </tr>
                    <tr>
                    <td>Gender</td>
                        {/* <td>{adminData.Gender == 1? "Man":"Woman"}</td> */}
                        <td>Woman</td>
                    </tr>
                    <tr>
                    <td>DayOfBirth</td>
                        {/* <td>{adminData.DayOfBirth==null? "2001-01-01":adminData.DayOfBirth}</td> */}
                        <td>2003-02-27</td>
                    </tr>
                    </tbody></table>
                </form>
                <a onClick={function(event){showEdit()}} className="button1">Edit</a>
            </div>
        </div>
    )
}
export default AdminInfo
