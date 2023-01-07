import React, { useState } from "react";



type EditableSpanPropsType = {
        value: string
        onChange: (newValue: string) => void
    }

const EditableStatus = (props: EditableSpanPropsType) => {
  
    const [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
                setEditMode(false);
                props.onChange(title);
            }
    const changeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setTitle(e.currentTarget.value)
                    }
   return editMode
           ? <textarea value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
           : <span onDoubleClick={activateEditMode}>{props.value}</span>
};

export default EditableStatus
