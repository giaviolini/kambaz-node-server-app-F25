import PathParameters from "./PathParameters.js";
import QueryParameter from "./QueryParameters.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
export default function Lab5(app) {
    app.get("/lab5/welcome", (req, res) => {
      res.send("Welcome to Lab 5");
    });
    PathParameters(app);
    QueryParameter(app);
    WorkingWithObjects(app);
    WorkingWithArrays(app);
  }
  