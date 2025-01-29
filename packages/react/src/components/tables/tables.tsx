import React from 'react';

interface TableProps {
    data: Array<{ [key: string]: any }>;
    columns: Array<{ header: string; accessor: string }>;
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.accessor}>{column.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column) => (
                            <td key={column.accessor}>{row[column.accessor]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;

// Example usage of the Table component
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Table from './tables';

// const data = [
//     { name: 'John Doe', age: 28, city: 'New York' },
//     { name: 'Jane Smith', age: 34, city: 'San Francisco' },
//     { name: 'Sam Johnson', age: 45, city: 'Chicago' },
// ];

// const columns = [
//     { header: 'Name', accessor: 'name' },
//     { header: 'Age', accessor: 'age' },
//     { header: 'City', accessor: 'city' },
// ];

// const App = () => (
//     <div>
//         <h1>Example Table</h1>
//         <Table data={data} columns={columns} />
//     </div>
// );

// ReactDOM.render(<App />, document.getElementById('root'));