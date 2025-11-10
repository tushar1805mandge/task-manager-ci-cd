import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

export const addTask = async (req, res) => {
  const { title } = req.body;
  const newTask = await Task.create({ title });
  res.json(newTask);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.destroy({ where: { id } });
  res.json({ message: "Task deleted" });
};
