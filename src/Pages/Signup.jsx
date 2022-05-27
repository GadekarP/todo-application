import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

export default function Signup() {

    const formik = useFormik({
        initialValues: {
            Name: 'john',
            Email: 'john@gmail.com',
            Mobile: '7020989622',
            Password: '123',
            CPassword: '123'



        },
        validationSchema: yup.object({
            Name: yup.string().required("name can not be empty"),
            Email: yup.string().required("email cannot be empty").email("this is not valid email"),
            Mobile: yup.string().required("plese enter mobile number").min(10, "please enter valid mobile number").max(10, "please enter valid mobile number"),
            Password: yup.string().required().min(3, "password can not be less than 3 chars"),
            CPassword: yup.string().required()
                .oneOf(
                    [yup.ref("Password"), null], "password and confirm password should be same "
                ),

        }),
        onSubmit: async () => {
            console.log(formik.values);

        }
    })
    return (
        <div className="container" >
            {JSON.stringify(formik.values)}
            <div div className="row" >
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Signup</div>
                        <div className="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <label for="name" className="form-label">First name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name='Name'
                                        placeholder="Enter your name"
                                        error={formik?.errors?.Name}
                                        helperText={formik?.errors?.Name}
                                        onChange={formik.handleChange}
                                        value={formik.values.Name}
                                    />
                                    <div className="text-danger">{formik?.errors?.Name}</div>
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div className="mt-2">
                                    <label for="email" className="form-label">First Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name='Email'
                                        placeholder="Enter Your Email"
                                        error={formik?.errors?.Email}
                                        helperText={formik?.errors?.Email}
                                        onChange={formik.handleChange}
                                        value={formik.values.Email}
                                    />
                                    <div className="text-danger">{formik?.errors?.Email}</div>
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div className="mt-2">
                                    <label for="password" className="form-label">Password</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter Your Password"
                                        name='Password'
                                        error={formik?.errors?.Password}
                                        helperText={formik?.errors?.Password}
                                        onChange={formik.handleChange}
                                        value={formik.values.Password}
                                    />
                                    <div className="text-danger">{formik?.errors?.Password}</div>
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a password.</div>
                                </div>
                                <div className="mt-2">
                                    <label for="cpassword" className="form-label"
                                    >Confirm Password</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cpassword"
                                        name='CPassword'
                                        placeholder="Confirm Your Password"
                                        error={formik?.errors?.CPassword}
                                        helperText={formik?.errors?.CPassword}
                                        onChange={formik.handleChange}
                                        value={formik.values.CPassword}
                                    />
                                    <div className="text-danger">{formik?.errors?.CPassword}</div>
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">
                                        Please Recheck Your Password.
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-3">
                                    Signup
                                </button>
                            </form>
                            <p className="text-center mt-3">
                                Already Have Account? <Link to="/">Login</Link>
                            </p>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
