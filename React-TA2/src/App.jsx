import React from 'react';
import Card from './components/Card';
import CardContent from './components/CardContent';
import './App.css';

function App() {
  const tasks = [
    {
      title: "Task 1",
      description: "aaaaaa",
      assignedTo: "Hola",
      startDate: "2024-09-01",
      endDate: "2024-09-15"
    },
    {
      title: "Task 2",
      description: "iiiiii",
      assignedTo: "Pepe",
      startDate: "2024-09-10",
      endDate: "2024-09-20"
    },
    {
      title: "Task 3",
      description: "zzzzz",
      assignedTo: "Pepito",
      startDate: "2024-09-15",
      endDate: "2024-09-25"
    }
  ];

  return (
    <div className="app">
      {tasks.map((task, index) => (
        <Card key={index}>
          <CardContent 
            title={task.title}
            description={task.description}
            assignedTo={task.assignedTo}
            startDate={task.startDate}
            endDate={task.endDate}
          />
        </Card>
      ))}
    </div>
  )
}

export default App;
