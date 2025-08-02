import { TaskInput } from "./components/TaskInput";
import { TaskCard } from "./components/TaskCard";
import { Sidebar } from "./components/Sidebar";
import { type TaskCardProps } from "./libs/types";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";



function App() {
  const Taskcards: TaskCardProps[] = [
    {
      id: 1,
      title: "Read a book",
      description: "Vite + React + Boostrap + TS",
      isDone: false,
    },
    {
      id: 2,
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: 3,
      title: "Deploy app",
      description: "Push project to Github Page",
      isDone: false,
    },
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header></Header>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Pakpicha" type="student"></Sidebar>
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <div className="col-12 m-2 p-0">
              {/* input ด้านบน*/}
              <TaskInput></TaskInput>
              {/* Card รายการ */}
              <TaskCard {...Taskcards[0]}></TaskCard>
              <TaskCard {...Taskcards[1]}></TaskCard>
              <TaskCard {...Taskcards[2]}></TaskCard>
            </div>
          </main>
        </div>
      </div>
      {/* Footer ด้านล่าง */}
      <Footer
        year="2026"
        fullName="Pakpicha Moonjit"
        studentId="670610721"
      ></Footer>
    </div>
  );
}

export default App;