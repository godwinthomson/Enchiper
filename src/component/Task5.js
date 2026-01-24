function Task5(){
    const student=[
        {id:1,name:"Godwin"},
        {id:2,name:"Balaji"},
        {id:3,name:"Haarish"}
    ];
    return(
        <ul>
            {student.map((student)=>(
                <li key={student.id}>{student.name}</li>
            ))}
        </ul>
    );
}export default Task5;