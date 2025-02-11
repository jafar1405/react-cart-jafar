import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

import Axios from 'axios';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
      {
          columns,
          data,
      }
    )

  

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map(
          (row, i) =>
            prepareRow(row) || (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
        )}
      </tbody>
    </table>
  )
}

function Admin() {
  const columns = React.useMemo(
    () => [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
        Header: 'First Name',
        accessor: 'firstname',
        },
        {
        Header: 'Last Name',
        accessor: 'lastname',
        },
      {
        Header: 'User Name',
        accessor: 'username',
      },
      {
        Header: 'password',
        accessor: 'password',
      }
    ],
    []
  )

  

  const [data, setData] = useState(React.useMemo(() => [{id:'',firstname:'',lastname:'',username:'',password:''}]))

    useEffect(()=>{
      let isSubscribed = true;
      Axios.get('https://json-server-jafar.herokuapp.com/user')
      .then(res=>{
        if(isSubscribed){
          setData(res.data)
        }          
      })

      return () => isSubscribed = false
  },[])
   

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default Admin
