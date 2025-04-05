interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner?: string;
    age?: number;
    isDeveloper?: boolean;
    deleTodo: (value: number) => void
}


const TodoData = (props: IProps) => {
    const { todos, owner = "", age = "", deleTodo } = props;
    return (
        <div >
            <div>{owner}</div>
            <div>{age}</div>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <div>
                            {item.id} - {item.title}
                            {"  "}
                            <button onClick={() => { deleTodo(item.id) }}>Delete</button>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
export default TodoData;