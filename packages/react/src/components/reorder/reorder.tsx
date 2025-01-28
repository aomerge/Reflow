import React, { useState } from 'react';

interface Item {
    id: number;
    text: string;
}

const Reorder: React.FC = () => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
    ]);

    const handleReorder = (startIndex: number, endIndex: number) => {
        const result = Array.from(items);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        setItems(result);
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={item.id}>
                    <span>{item.text}</span>
                    <button onClick={() => handleReorder(index, index - 1)} disabled={index === 0}>
                        Up
                    </button>
                    <button onClick={() => handleReorder(index, index + 1)} disabled={index === items.length - 1}>
                        Down
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Reorder;