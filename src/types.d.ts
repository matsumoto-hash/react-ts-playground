
export type Priority = "low" | "midium" |"high";

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    priority: Priority;
    deadline?: Date;
}