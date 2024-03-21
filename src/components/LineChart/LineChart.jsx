import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
    { id: 1, name: "Emma Johnson", math: 85, physics: 78, chemistry: 90 },
    { id: 2, name: "Liam Smith", math: 78, physics: 82, chemistry: 85 },
    { id: 3, name: "Olivia Brown", math: 92, physics: 88, chemistry: 94 },
    { id: 4, name: "Noah Taylor", math: 67, physics: 75, chemistry: 70 },
    { id: 5, name: "Sophia Martinez", math: 89, physics: 84, chemistry: 91 },
    { id: 6, name: "William Anderson", math: 73, physics: 70, chemistry: 75 },
    { id: 7, name: "Ava Wilson", math: 95, physics: 92, chemistry: 97 },
    { id: 8, name: "James Thompson", math: 81, physics: 79, chemistry: 84 },
    { id: 9, name: "Isabella Garcia", math: 88, physics: 86, chemistry: 90 },
    { id: 10, name: "Logan Hernandez", math: 79, physics: 75, chemistry: 82 }
];

    return (
        <div className='m-12'>
            <LChart width={800} height={500} data={mathMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>   
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
                <Line dataKey="chemistry"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;