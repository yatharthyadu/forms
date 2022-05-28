export const FormInput = ({ submit, handleChange, isMarried }) => {
    return (
        <>
            <nav className="navbar navbar-light bg-light ">
                <div className="container-fluid justify-content-end">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Fill the form</button>
                </div>
            </nav>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">User Details Form</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submit}>
                                <input onChange={handleChange} name="fullName" className="form-control mb-3" type="text" placeholder="Name" />
                                <input onChange={handleChange} name="age" className="form-control mb-3" type="number" placeholder="Age" />
                                <input onChange={handleChange} name="city" className="form-control mb-3" type="text" placeholder="City" />
                                <select onChange={handleChange} className="form-select mb-3" name="department">
                                    <option value="">Select Department</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Sales">Sales</option>
                                    <option value="DevOps">DevOps</option>
                                </select>
                                <input onChange={handleChange} name="salary" className="form-control mb-3" type="number" placeholder="Salary" />
                                <div className="form-check mb-4">
                                    <input onChange={handleChange} checked={isMarried} name="isMarried" className="form-check-input" type="checkbox" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">Marital Status</label>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    <input type="submit" className="btn btn-success" data-bs-dismiss="modal" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};