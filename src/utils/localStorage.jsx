const employees = [
  {
    id: 1,
    name: "vijay",
    password: "123",
    email: "e@e.com",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Description for task 1",
        date: "2024-10-01",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for task 2",
        date: "2024-10-02",
        category: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Description for task 3",
        date: "2024-10-03",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 4",
        description: "Description for task 4",
        date: "2024-10-04",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    name: "virat",
    password: "123",
    email: "employee2@example.com",
    taskCounts: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Description for task 1",
        date: "2024-10-05",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for task 2",
        date: "2024-10-06",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Description for task 3",
        date: "2024-10-07",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 4",
        description: "Description for task 4",
        date: "2024-10-08",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    name: "kohli",
    password: "123",
    email: "employee3@example.com",
    taskCounts: {
      active: 0,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Description for task 1",
        date: "2024-10-09",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for task 2",
        date: "2024-10-10",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Description for task 3",
        date: "2024-10-11",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 4",
        description: "Description for task 4",
        date: "2024-10-12",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    name: "harshit",
    password: "123",
    email: "employee4@example.com",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 2,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Description for task 1",
        date: "2024-10-13",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for task 2",
        date: "2024-10-14",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Description for task 3",
        date: "2024-10-15",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 4",
        description: "Description for task 4",
        date: "2024-10-16",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    name: "rohit",
    password: "123",
    email: "employee5@example.com",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Description for task 1",
        date: "2024-10-17",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for task 2",
        date: "2024-10-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Description for task 3",
        date: "2024-10-19",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 4",
        description: "Description for task 4",
        date: "2024-10-20",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    password: "123",
    email: "admin@example.com",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};