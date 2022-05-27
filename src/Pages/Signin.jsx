import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'



export default function Signin() {

    const formik = useFormik({
        initialValues: {
            Email: 'john@gmail.com',
            password: '123'

        },
        validationSchema: yup.object({
            Email: yup.string().email("this is not valid email"),

            password: yup.string().required()
        }),
        //{ Email, password }
        onSubmit: async () => {
            console.log(formik.values);
        }

    })

    return (
        <div className="container">
            {JSON.stringify(formik.values)}
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <label for="email" className="form-label">First Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter Your Email"
                                        onChange={formik.handleChange}
                                        value={formik.values.Email}
                                        name='Email'
                                    />
                                    <div className="text-danger">{formik?.errors?.Email}</div>
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div className="mt-2">
                                    <label for="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter Your Password"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        name='password'
                                    />
                                    <div className="text-danger">{formik?.errors?.password}</div>
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a username.</div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-3">
                                    Login
                                </button>
                            </form>
                            <p className="text-center mt-3">
                                Dont Have Account? <a href="#">Create Account</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
