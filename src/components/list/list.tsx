import React from 'react';

interface ListItem {
    id: number;
    name: string;
    value: string;
}

interface ListTableProps {
    items: ListItem[];
}

const ListTable: React.FC<ListTableProps> = ({ items }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListTable;