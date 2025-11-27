// Utility Types
const updateAssignment = (assign, propsToUpdate) => {
    return { ...assign, ...propsToUpdate };
};
const assign1 = {
    studentId: "compsci123",
    title: "Final project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assgnGrade = updateAssignment(assign1, { grade: 95 });
// Required and Readonly
const recordAssignment = (assign) => {
    // send to database,etc.
    return assign;
};
const assignVerified = {
    ...assgnGrade,
    verified: true,
};
recordAssignment({ ...assgnGrade, verified: true });
// Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "A",
};
const gradeData = {
    Sara: { assign1: 82, assign2: 91 },
    Kelly: { assign1: 85, assign2: 88 },
};
const score = {
    studentId: "K123",
    grade: 65,
};
const preview = {
    studentId: "k123",
    title: "final Project",
};
//ReturnType
//type newAssign = {title: string, points : number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Type", 100);
console.log(tsAssign);
const assignArgs = ["generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
};
fetchUsers().then((users) => console.log(users));
export {};
//# sourceMappingURL=app.js.map