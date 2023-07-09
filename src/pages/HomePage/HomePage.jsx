import React from "react";
import ListMovie from "./ListMovie/ListMovie";
import TasksMovie from "./TasksMovie/TasksMovie";

function HomePage() {
    return (
        <>
            <ListMovie />
            <TasksMovie />
        </>
    );
}

export default HomePage;
