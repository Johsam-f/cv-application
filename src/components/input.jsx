

export default function Input({ name, type, placeholder, labeltext, value, onChange  }){
    
    return(
        <div className="input-wrapper">
            <label htmlFor = {name} >
                {labeltext}
            </label>
            <input 
            id = {name}
             name = {name}
            type = {type}
            value={value}
            placeholder = {placeholder}
            onChange = {onChange}
         />
        </div>
        
    );
}

Input.defaultProps = {
    type : "text"
}