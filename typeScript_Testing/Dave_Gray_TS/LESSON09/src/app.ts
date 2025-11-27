// Utility Types

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};
const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assgnGrade: Assignment = updateAssignment(assign1, { grade: 95 });

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database,etc.
  return assign;
};
const assignVerified: Readonly<Assignment> = {
  ...assgnGrade,
  verified: true,
};
recordAssignment({ ...assgnGrade, verified: true });

// Record

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "F";
const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "A",
};

interface Grades {
  assign1: number;
  assign2: number;
}
const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 82, assign2: 91 },
  Kelly: { assign1: 85, assign2: 88 },
};

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "K123",
  grade: 65,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "final Project",
};

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;

// Nonnullable

type AllPossibleGrades = "Dave" | "Johm" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

//ReturnType

//type newAssign = {title: string, points : number}

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Type", 100);

console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - hekps us with the returntype of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
