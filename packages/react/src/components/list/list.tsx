import React from 'react';

interface ListItem {
    id: number;
    name: string;
    value: string;
}

interface ListTableProps {
    items: ListItem[];
}

/**
 * ListTable component renders a table displaying a list of items.
 *
 * @component
 * @param {ListTableProps} props - The props for the ListTable component.
 * @param {Array} props.items - The array of items to be displayed in the table.
 * @param {number} props.items[].id - The unique identifier for each item.
 * @param {string} props.items[].name - The name of each item.
 * @param {string} props.items[].value - The value of each item.
 *
 * @returns {JSX.Element} A table element displaying the list of items.
 */
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