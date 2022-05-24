import React from 'react'
import {BiSend} from 'react-icons/bi'

const Messeger = ({openMess,showMess}) =>{
    return(
        <div className='bg-mess' style={{display: openMess ? 'flex' : 'none' }}>
            <div className="modal-messeger" >
                <div className="close" onClick={function(event){showMess()}}>+</div>
                <span className='mess-title'>Thong bao den user</span>
                <form className='form-mess'>
                    <textarea cols={51} rows={10}></textarea>
                    <BiSend className='send-btn' size={35} style={{color:"#9E4242"}}/>
                </form>
            </div>
        </div>
    )
}
export default Messeger