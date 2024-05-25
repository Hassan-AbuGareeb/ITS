'use client'
import React from 'react'
import Chart from 'react-google-charts'

const Dashboard = () => {

    const data1 = [
        [
          "Day",
          "Guardians of the Galaxy",
          "The Avengers",
          "Transformers: Age of Extinction",
        ],
        [1, 37.8, 80.8, 41.8],
        [2, 30.9, 69.5, 32.4],
        [3, 25.4, 57, 25.7],
        [4, 11.7, 18.8, 10.5],
        [5, 11.9, 17.6, 10.4],
        [6, 8.8, 13.6, 7.7],
        [7, 7.6, 12.3, 9.6],
        [8, 12.3, 29.2, 10.6],
        [9, 16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11, 5.3, 7.9, 4.7],
        [12, 6.6, 8.4, 5.2],
        [13, 4.8, 6.3, 3.6],
        [14, 4.2, 6.2, 3.4],
      ];
    
      const data2 = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ];
    
      const data3 = [
        ["Year", "Sales", "Expenses"],
        ["2013", 1000, 400],
        ["2014", 1170, 460],
        ["2015", 660, 1120],
        ["2016", 1030, 540],
      ];
    
      const data4 = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ];
    
      const options1 = {
        chart: {
          title: "Box Office Earnings in First Two Weeks of Opening",
          subtitle: "in millions of dollars (USD)",
        },
      };
    
      const options2 = {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      };
    
      const options3 = {
        isStacked: true,
        height: 300,
        legend: { position: "top", maxLines: 3 },
        vAxis: { minValue: 0 },
      };
    
      const options4 = {
        title: "My Daily Activities",
      };

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
        <h1 className='text-3xl px-5 py-10'>Dashboard</h1>
        <div className='w-full p-3 grid grid-cols-2 gap-4'>
            <div className="p-2 flex flex-col">
            <Chart
              chartType="Line"
              width="100%"
              height="400px"
              data={data1}
              options={options1}
            />
            <button className='self-end bg-cyan-600 py-2 px-5 mt-2 rounded-xl'>Generate report</button>
            </div>
            <div className="p-2 flex flex-col">
                <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={data2}
                options={options2}
                />
            <button className='self-end bg-cyan-600 py-2 px-5 mt-2 rounded-xl'>Generate report</button>
            </div>
            <div className="p-2 flex flex-col">
                <Chart
                chartType="AreaChart"
                width="100%"
                height="400px"
                data={data3}
                options={options3}
                />
            <button className='self-end bg-cyan-600 py-2 px-5 mt-2 rounded-xl'>Generate report</button>
            </div>
            <div className="p-2 flex flex-col">
            <Chart
              chartType="PieChart"
              data={data4}
              options={options4}
              width={"100%"}
              height={"400px"}
            />
            <button className='self-end bg-cyan-600 py-2 px-5 mt-2 rounded-xl'>Generate report</button>
          </div>

        </div>
    </div>
  )
}

export default Dashboard