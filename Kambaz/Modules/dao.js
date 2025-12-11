import { v4 as uuidv4 } from "uuid";
import model from "../Courses/model.js";

export default function ModulesDao() {

  async function updateModule(courseId, moduleId, moduleUpdates) {
    const course = await model.findById(courseId);
    const mod = course.modules.id(moduleId);

    if (!mod) {
      throw new Error("Module not found");
    }

    Object.assign(mod, moduleUpdates);
    await course.save();

    return mod;
  }

  async function deleteModule(courseId, moduleId) {
    return model.updateOne(
      { _id: courseId },
      { $pull: { modules: { _id: moduleId } } }
    );
  }

  async function createModule(courseId, module) {
    const newModule = { ...module, _id: uuidv4() };

    await model.updateOne(
      { _id: courseId },
      { $push: { modules: newModule } }
    );

    return newModule;
  }

  async function findModulesForCourse(courseId) {
    const course = await model.findById(courseId);
    return course.modules;
  }

  return {
    findModulesForCourse,
    createModule,
    deleteModule,
    updateModule,
  };
}
