import React from "react";
import Table from 'react-bootstrap/Table'
import {TiDeleteOutline} from "react-icons/ti";
import {TbEdit} from "react-icons/tb";

const List1 = ({getData, deleteFn, goToEditFn, editTxtFn}) => {


    return (
        <React.Fragment>
            <Table>
                <thead>
                    <tr>
                        <th>To Do List:</th>
                        <th> Completed Task: </th>
                        <th> Delete Task </th>
                        <th> Edit Task</th>
                    </tr>
                </thead>
                <tbody>
                    {getData && getData.map((dato, i) => 
                        <tr key={i}>
                            <td style={{textDecoration: dato.tachado? 'line-through':'', color: dato.tachado? 'green':'' }}>{dato.task}</td>
                            <td><input type="checkbox" onClick={e => editTxtFn(dato.task, i)} ></input></td>
                            <td> <TiDeleteOutline color='red' onClick={e => deleteFn(dato.task, i)}/> </td>
                            <td> <TbEdit color='green 'onClick={e => goToEditFn(dato, i)}/></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </React.Fragment>
    )
}
export default List1;