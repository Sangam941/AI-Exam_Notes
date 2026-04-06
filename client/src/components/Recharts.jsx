import React from 'react';
import { BarChart as ReBarChart, Bar, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Recharts = ({ charts }) => {
    if (!charts || charts.length === 0) return null;

    // List of hex colors
    const colorList = [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF",
        "#FF9F40",
    ];

    return (
        <div>
            {charts.map((chart, index) => (
                <div key={index} className="mb-8">
                    <p className="font-semibold mb-2">{chart.title}</p>
                    {chart.type === "bar" && Array.isArray(chart.data) && chart.data.length > 0 &&
                        <ResponsiveContainer width="100%" height={300}>
                            <ReBarChart
                                data={chart.data}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis allowDecimals={false} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill={colorList[0]}>
                                    {chart.data.map((_, cellIdx) => (
                                        <Cell key={`cell-bar-${cellIdx}`} fill={colorList[cellIdx % colorList.length]} />
                                    ))}
                                </Bar>
                            </ReBarChart>
                        </ResponsiveContainer>
                    }

                    {chart.type === "line" && Array.isArray(chart.data) && chart.data.length > 0 &&
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={chart.data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis allowDecimals={false} />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    }

                    {chart.type === "pie" && Array.isArray(chart.data) && chart.data.length > 0 &&
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Tooltip />
                                <Legend />
                                <Pie
                                    data={chart.data}
                                    dataKey="value"
                                    nameKey="name"
                                    outerRadius={100}
                                    label
                                >
                                    {chart.data.map((_, pieIdx) => (
                                        <Cell key={`cell-pie-${pieIdx}`} fill={colorList[pieIdx % colorList.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    }
                </div>
            ))}
        </div>
    );
};

export default Recharts;