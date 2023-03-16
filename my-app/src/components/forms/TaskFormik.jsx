import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LEVELS } from "../../models/Levels.enum.js";
import "../../css/TaskFormik.css";

let taskSchema = Yup.object().shape({
  name: Yup.string().required("Task name is required"),
  description: Yup.string().required("Task description is required"),
  level: Yup.string().required("Must choose one option"),
});

const TaskFormik = () => {
  const initialCredentials = {
    name: "",
    description: "",
    level: "",
  };
  return (
    <div>
      <Formik
        initialValues={initialCredentials}
        validationSchema={taskSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <div>
            <Form className="formik">
              <label className="field" htmlFor="name">Task Name</label>
              <Field
                className="field"
                id="name"
                name="name"
                placeholder="Task name"
              />
              {errors.name && touched.name && <ErrorMessage name="name" />}
              <label className="field" htmlFor="description">Task description</label>
              <Field
                className="field"
                id="description"
                name="description"
                placeholder="Task description"
              />
              {errors.description && touched.description && (
                <ErrorMessage name="description" />
              )}
              <label className="field" htmlFor="level">Task level</label>
              <Field
                className="field"
                component="select"
                id="level"
                name="level"
                multiple={false}
              >
                <option value="">Choose an option</option>
                <option value={LEVELS.NORMAL}>Normal</option>
                <option value={LEVELS.URGENT}>Urgent</option>
                <option value={LEVELS.BLOCKING}>Blocking</option>
              </Field>
              {errors.level && touched.level && <ErrorMessage name="level" />}
              <button className="field" type="submit">Add Task</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default TaskFormik;
