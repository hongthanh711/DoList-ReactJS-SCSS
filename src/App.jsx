/* eslint-disable consistent-return */
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Accordion from "./components/Accordion/Accordion";
import TicketInput from "./components/TicketInput/TicketInput";
import "./scss/style.scss";
import Task from "./components/Task/Task";

function App() {
  const mockDataTicket = [
    {
      id: 1,
      name: "Ticket1",
      task: [
        { id: 11, name: "Item-1", done: true },
        { id: 12, name: "Item-2", done: false },
      ],
    },
    {
      id: 2,
      name: "Ticket2",
      task: [
        { id: 21, name: "Item-1", done: true },
        { id: 22, name: "Item-2", done: false },
        { id: 23, name: "Item-3", done: true },
      ],
    },
    {
      id: 3,
      name: "Ticket3",
      task: [
        { id: 31, name: "Item-1", done: true },
        { id: 32, name: "Item-2", done: false },
      ],
    },
  ];
  const [listTicket, setListTicket] = useState(mockDataTicket);
  const [idActive, setIdActive] = useState(null);
  const [nameTask, setNameTask] = useState("");

  const tollgeDone = (e, ticketId, taskId) => {
    const cloneArray = JSON.parse(JSON.stringify(listTicket));

    const indexTicket = cloneArray.findIndex(
      (ticket) => ticket.id === ticketId
    );
    const indexTask = cloneArray[indexTicket].task.findIndex(
      (task) => task.id === taskId
    );
    cloneArray[indexTicket].task[indexTask].done = e.target.checked;
    setListTicket(cloneArray);
  };

  const handleClickCreate = (name) => {
    if (name !== "") {
      setListTicket([...listTicket, { id: Date.now(), name, task: [] }]);
    }
  };

  const handleClickAddTask = (ticketId) => {
    setIdActive(ticketId);
  };

  const handleDeleteTask = (ticketId, taskId) => {
    const cloneArray = JSON.parse(JSON.stringify(listTicket));

    const curr = cloneArray.map((ticket) => {
      if (ticket.id === ticketId) {
        return {
          ...ticket,
          task: ticket.task.filter((task) => task.id !== taskId),
        };
      }
      return ticket;
    });

    setListTicket(curr);
  };

  const handleChangeTaskName = (e) => {
    setNameTask(e.target.value);
  };

  const onKeyDown = (e, indexTicket) => {
    if (e.keyCode === 13 && nameTask !== "") {
      const cloneArray = JSON.parse(JSON.stringify(listTicket));
      cloneArray[indexTicket].task.push({
        id: Date.now(),
        name: nameTask,
        done: false,
      });
      setListTicket(cloneArray);
      setNameTask("");
    }
    if (e.keyCode === 27) {
      setIdActive(null);
      setNameTask("");
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="accordion">
          {Array(3)
            .fill(0)
            .map(() => (
              <Accordion />
            ))}
        </div>
        <div className="right-side">
          <div className="title">
            <p className="title-text">DASHBOARD</p>
            <div className="ticket-input">
              <TicketInput handleClick={handleClickCreate} />
            </div>
          </div>
          <div className="list-ticket">
            {listTicket.map((ticket, index) => {
              return (
                <div className="ticket" key={ticket.id}>
                  <div className="ticket-content">
                    <div className="ticket-title">
                      <p>{ticket.name}</p>
                      <button
                        type="button"
                        onClick={() => handleClickAddTask(ticket.id)}
                        className="add-task"
                      >
                        +
                      </button>
                    </div>
                    {idActive === ticket.id && (
                      <input
                        value={nameTask}
                        placeholder="New Item"
                        className="add-task-input"
                        onChange={(e) => {
                          handleChangeTaskName(e);
                        }}
                        onKeyDown={(e) => onKeyDown(e, index)}
                      />
                    )}
                    {ticket.task.map((task) => {
                      return (
                        <Task
                          ticket={ticket}
                          handleDeleteTask={handleDeleteTask}
                          task={task}
                          tollgeDone={tollgeDone}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
