import CaptionWithRadio from "../../components/caption-with-radio";
import CaptionWithText from "../../components/caption-with-text";

export default function TaskAddtionalInfo() {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <form action="">
            <div className="mb-3">
              Purpose:
              <br />
              <CaptionWithRadio name="purpose" id="purpose_client" value="purpose" label="Client"/>
              <CaptionWithRadio name="purpose" id="purpose_group" value="group"  label="Group"/>
              <CaptionWithRadio name="purpose" id="purpose_agent" value="agent"  label="Agent"/>
            </div>
            <CaptionWithText caption="Label :" />
            <CaptionWithText caption="Key :" />
            <div className="mb-3">
              Status:
              <br />
              <CaptionWithRadio name="status" id="status_active" value="active"  label="Active"/>
              <CaptionWithRadio name="status" id="status_passive" value="passive"  label="Passive"/>
            </div>
            <div>
              <button className="btn btn-primary w-100 p-3">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
