import { useState } from "react";


interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}
interface IProps {
    name?: string;
    addNewTodo: (value: ITodo) => void;
}

const TodoInput = (props: IProps) => {
    const { addNewTodo } = props;
    const [todo, setTodo] = useState<string>();


    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    }

    function randomInteger() {
        return Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
    }

    const handleClick = () => {
        if (!todo) {
            alert("emty to do");
            return;
        }
        addNewTodo({
            id: randomInteger(),
            title: todo,
            isComplete: false,
        });

        setTodo("");
    }
    return (
        <div style={{ display: "flex", gap: 15, marginBottom: "15px" }}>
            <input
                type="text"
                value={todo}
                onChange={handleTextChange} />
            <button onClick={handleClick}>Add to do</button>
        </div>
    )
};

export default TodoInput