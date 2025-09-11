
export type Priority = "low" | "midium" |"high";

export type interface Todo {
    id: string;
    title: string;
    completed: boolean;
    priority: Priority;
    deadline?: Date;
}