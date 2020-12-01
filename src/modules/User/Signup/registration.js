function Registration() {
    return (
        <div class='row'>
            <div class='col-sm'>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter Password" />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Sign Up
                </button>
                </form>
            </div>
            <div class='col-sm'>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter Password" />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Sign In
            </button>
                </form>
            </div>
        </div>
    );
}

export default Registration;