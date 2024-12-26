export default function CaptionWithRadio(props){
    return(

        <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name={props.name}
          id={props.id}
          value={props.value}
        />
        <label className="form-check-label" for={props.id}>
        {props.label}
        </label>
      </div>
    )


}