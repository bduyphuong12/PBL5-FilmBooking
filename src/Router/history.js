import React from 'react'
import {BsEye} from 'react-icons/bs'

export default function HistoryBuy({hoverChange}) {
  return (
    <tr>
        <td>39234</td>
        <td>19:20_23/04/2022</td>
        <td>280.000d</td>
        <td><BsEye onMouseOver={function(event){hoverChange()}} onMouseOut={function(event){hoverChange()}}  className="iconfont1" size="20px"/></td>
    </tr>
  )
}
