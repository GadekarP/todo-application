import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'


export default function Todo() {
    const formik = useFormik({
        initialValues: {
            Task: 'john',
            Desc: 'john doe',
            Priority: 'high',


        },
        validationSchema: yup.object({
            Task: yup.string().required("name can not be empty"),
            Desc: yup.string().required("desc can not be empty"),
            Priority: yup.string().required("Priority can not be empty"),


        }),
        onSubmit: async () => {
            console.log(formik.values);

        }
    })
    const formik1 = useFormik({
        initialValues: {
            mTask: '',
            mDesc: '',
            mPriority: ''

        },
        validationSchema: yup.object({
            mTask: yup.string().required("please set priority"),
            mDesc: yup.string().required("please set priority"),
            mPriority: yup.string().required("please set priority"),

        }),
        onSubmit: async () => {
            console.log(formik1.values);

        }
    })

    return (
        <>
            <div className="container">
                {JSON.stringify(formik.values)}
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header">Todo</div>
                            <div className="card-body">
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <label for="task" className="form-label">First task</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="task"
                                            name='Task'
                                            placeholder="Enter Your task"
                                            error={formik?.errors?.Task}
                                            helperText={formik?.errors?.Task}
                                            onChange={formik.handleChange}
                                            value={formik.values.Task}
                                        />
                                        <div className="text-danger">{formik?.errors?.Task}</div>
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please add task.</div>
                                    </div>
                                    <div className="mt-2">
                                        <label for="desc" className="form-label">Description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="desc"
                                            name="Desc"
                                            placeholder="Enter task description"
                                            error={formik?.errors?.Desc}
                                            helperText={formik?.errors?.Desc}
                                            onChange={formik.handleChange}
                                            value={formik.values.Desc}
                                        />
                                        <div className="text-danger">{formik?.errors?.Desc}</div>
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please add description</div>
                                    </div>
                                    <div className="mt-2">
                                        <label for="priority"> Priority</label>
                                        <select
                                            className="form-select"
                                            id="priority"
                                            name='Priority'
                                            error={formik?.errors?.Priority}
                                            helperText={formik?.errors?.Priority}
                                            onChange={formik.handleChange}
                                            value={formik.values.Priority}
                                        >
                                            <option selected>Select Priority</option>
                                            <option value="high">High</option>
                                            <option value="medium">Medium</option>
                                            <option value="low">Low</option>
                                        </select>
                                        <div className="text-danger">{formik?.errors?.Priority}</div>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 mt-3">
                                        Add Todo
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div
                                className="card-header d-flex justify-content-between"
                                data-bs-toggle="collapse"
                                data-bs-target="#task1"
                            >
                                task 1
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-warning"
                                        data-bs-target="#editModal"
                                        data-bs-toggle="modal"
                                    >
                                        edit
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-danger"
                                        data-bs-target="#deleteModal"
                                        data-bs-toggle="modal"
                                    >
                                        delete
                                    </button>
                                </div>
                            </div>
                            <div className="collapse" id="task1">
                                <div className="card-body">task 1 description</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal fade" id="editModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModal">Edit Todo</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={formik1.handleSubmit}>
                                <div>
                                    <label for="mtask" className="form-label">First task</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="mtask"
                                        name='mTask'
                                        placeholder="Enter Your task"
                                        error={formik1?.errors?.mTask}
                                        helperText={formik1?.errors?.mTask}
                                        onChange={formik1.handleChange}
                                        value={formik1.values.mTask}
                                    />
                                    <div className="text-danger">{formik1?.errors?.mTask}</div>
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please add task.</div>
                                </div>
                                <div className="mt-2">
                                    <label for="mdesc" className="form-label">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="mdesc"
                                        name='mDesc'
                                        placeholder="Enter task description"
                                        error={formik1?.errors?.mDesc}
                                        helperText={formik1?.errors?.mDesc}
                                        onChange={formik1.handleChange}
                                        value={formik1.values.mDesc}
                                    />
                                    <div className="text-danger">{formik1?.errors?.mDesc}</div>
                                    <div className="invalid-feedback">Please add description</div>
                                </div>
                                <div className="mt-2">
                                    <label for="mpriority"> Priority</label>
                                    <select
                                        className="form-select"
                                        id="mpriority"
                                        name='mPriority'
                                        error={formik1?.errors?.mPriority}
                                        helperText={formik1?.errors?.mPriority}
                                        onChange={formik1.handleChange}
                                        value={formik1.values.mPriority}
                                    >
                                        <option selected>Select Priority</option>
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                    <div className="text-danger">{formik1?.errors?.mPriority}</div>
                                </div>
                                <div className="d-flex">
                                    <button type="submit" className="btn btn-primary w-50 mt-3">
                                        Update Todo
                                    </button>
                                    <button
                                        type="button"
                                        className="btn mt-3 w-50 btn-outline-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deleteModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-danger">
                                Are you sure you want delete this todo ?
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-danger">
                            <p className="text-center text-muted mb-5">
                                You can delete this todo at any time. If you change your mind, you
                                might not be able to recover it
                            </p>
                            <div className="btn-group d-flex">
                                <button type="button" className="btn btn-outline-danger w-50 ">Yes</button>
                                <button type="button" className="btn btn-success w-50">NO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
