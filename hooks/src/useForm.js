import {useState} from 'react'

export const useForm = (initialValues) => {
        const [values,setValues] = useState(initialValues)


    return[
        values,
         e => {
        setValues({
            // all the inital values ( in this case, an empty string)
            ...values,
            // setting the target value to whatever the name was
            [e.target.name] : e.target.value
        });
        }
    ]
}