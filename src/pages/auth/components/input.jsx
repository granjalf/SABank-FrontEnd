export default function Input({name, type, placeholder, value, onChange, iconClass}){
    return(
      <div className="input-group mb-3">
        <input name={name} type={type} className="form-control" placeholder={placeholder} value={value} onChange={onChange}></input>
        <div className="input-group-append">
          <div className="input-group-text">
            <span className={iconClass}></span>
          </div>
        </div>
      </div>
    );
  }