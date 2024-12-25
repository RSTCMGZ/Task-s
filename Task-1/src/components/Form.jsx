import React from "react";

const Form = () => {
  return (
    <div >
      <form
        action=""
        className="d-flex flex-column justify-content-between h-100 w-100"
      >
        {/* Purpose-radio start*/}
        <div className="Purpose-radio">
          <h6>Purpose :</h6>
          <div className="d-flex gap-4">
            <div className="d-flex gap-1">
              <input
                className="form-check-input"
                type="radio"
                name="radio_group1"
                id="Client"
              />
              <label className="form-label ">Client</label>
            </div>

            <div className="d-flex gap-1">
              <input
                className="form-check-input"
                type="radio"
                name="radio_group1"
                id="Agent"
              />
              <label className="form-label">Group</label>
            </div>
            <div className="d-flex gap-1">
              <input
                className="form-check-input"
                type="radio"
                name="radio_group1"
                id="Agent"
              />
              <label className="form-label ">Agent</label>
            </div>
          </div>
        </div>
        {/* Purpose-radio end */}

        {/*inputTextCenter start */}
        <div className="inputTextCenter mt-3 d-flex flex-column">
          <div>
            <label className="form-label fs-5 text-white"> Label:</label>
            <input type="text" class="form-control bg-transparent text-white" />
            <p className="mt-2 opacity-50 text-white">
              Please write label to here
            </p>
          </div>
          <div>
            <label className="form-label  fs-5 text-white"> Key:</label>
            <input type="text" class="form-control bg-transparent text-white" />
            <p className="mt-2 opacity-50 text-white">
              Please write key to here
            </p>
          </div>
        </div>
        {/*inputTextCenter end */}
        {/*Status start */}
        <div className="Status-radio">
          <h6>Status           :</h6>
          <div className="d-flex gap-4">
            <div className="d-flex gap-1">
              <input
                className="form-check-input"
                type="radio"
                name="radio_group1"
                id="Client"
              />
              <label className="form-label">Active</label>
            </div>

            <div className="d-flex gap-1">
              <input
                className="form-check-input"
                type="radio"
                name="radio_group1"
                id="Agent"
              />
              <label className="form-label">Passive</label>
            </div>
          
          </div>
        </div>
        {/*Status end */}
        {/* buttonSave start */}
        <div className="button mt-4">
                <button className="btn btn-success w-100 rounded-1">
                    Save <i class="bi bi-floppy"></i>
                </button>
        </div>
        {/* buttonSave end */}
      </form>
    </div>
  );
};

export default Form;
