const tasks = ["fetch butter for mormor", "draw a nice picture of a flower", "make coffee"];

export async function taskLoader() {    
    return { tasks };
}

export async function taskAction() {
    tasks.push("new task");
    return { tasks };
}