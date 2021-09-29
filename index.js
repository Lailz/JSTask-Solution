// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];

// REMOVE ME: SAMPLE FILLING
tasks = [
  { id: 0, title: "Game of thrones", category: "Movies", done: true },
  { id: 1, title: "Toy Story 4", category: "Movies", done: false },
];

categories = ["Movies", "Groceries"];
// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id
  tasks = tasks.map((task) =>
    taskId === task.id ? { ...task, done: !task.done } : task
  );
  renderTasks(tasks, "tasks-list");
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  const newTask = {
    id: tasks[tasks.length - 1].id + 1,
    title: taskTitle,
    category: selectedCategory,
    done: false,
  };
  tasks.push(newTask);
  renderTasks(tasks, "tasks-list");
}

function addCategory() {
  const newCategory = getNewCategoryText();
  categories.push(newCategory);
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);

  const done = getFilteredDone();

  filteredTasks = tasks.filter(
    (task) => task.done === done && selectedCategory === task.category
  );
  renderTasks(filteredTasks, "tasks-list");
}
