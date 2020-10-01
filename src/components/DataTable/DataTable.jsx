import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

const DataTable = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => setResponse(response.data))
      .catch(error => {
        console.error(error);
        setResponse([]);
      });
  }, []);

  return (
    <>
      <Table bordered responsive hover size="sm">
        <thead>
          <tr>
            <th>Post #</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {response.map(item => (
            <tr key={item.id}>
              <th scope="row">{item.postId}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default DataTable;
