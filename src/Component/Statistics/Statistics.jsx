
import React from 'react';
// import React, { PureComponent } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";




const Statistics = () => {
    const data = [
        { id: '1', name: 'Html css', mark: 50 },
        { id: '2', name: 'Responsiv.', mark: 55 },
        { id: '3', name: 'Bootstrap', mark: 57 },
        { id: '4', name: 'Js', mark: 45 },
        { id: '5', name: 'Dom', mark: 50 },
        { id: '6', name: 'API', mark: 55 },
        { id: '7', name: 'Debug', mark: 46 },
        { id: '8', name: 'React', mark: 50 },
      ];
    return (
        <div className='container'>
            <ComposedChart
                width={700}
                height={400}
                data={data}
                margin={{ top: 20, right: 10, bottom: 20, left: 10 }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="mark" fill="#8884d8" />
                <Line type="monotone" dataKey="mark" stroke="#82ca9d" />
            </ComposedChart>
        </div>
    );
};

export default Statistics;