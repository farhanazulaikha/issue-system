import './issue-page.css'
import { course, hostel, payment } from '../../data/data';
import { useState } from "react"
import axios from "axios"
import Popup from '../popup/popup';

function IssuePage() {

    const [issue, setIssue] = useState({
        name: "",
        email: "",
        selectedCategory: "",
        selectedSubCategory: "",
        description: ""
    })

    const [errors, setErrors] = useState({
        name: "default",
        email: "default",
        selectedCategory: "default",
        selectedSubCategory: "default",
        description: "default"
    })
    const [errorClass, setErrorClass] = useState("issue__field-error");
    const [modal, setModal] = useState(false);

    const handleInput = (event) => { 
        const {id, value} = event.target;

        setIssue(prevState => ({
            ...prevState,
            [id]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const numberField = ['name', 'email', 'description'];
        let fieldArray = {
            name: issue.name,
            email: issue.email,
            description: issue.description
        };

        for (let i = 0; i < numberField.length; i++) {
            if (/^\d+$/.test(issue[numberField[i]])) {
                fieldArray[numberField[i]] = Number(issue[numberField[i]]);
            }
        }
        
        axios.post('http://localhost:3001/api/submit-issue', {
        name: fieldArray.name,
        email: fieldArray.email,
        selectedCategory: issue.selectedCategory,
        selectedSubCategory: issue.selectedSubCategory,
        description: fieldArray.description
        }).then(() => {
            setModal(!modal);   
        }).catch(err =>  {
            let newError = {};
            let errors = err.response.data.errors;
            for (let i = 0; i < errors.length; i++) {
                newError[errors[i].param] = errors[i].msg;
            }
            setErrors(newError);
            setErrorClass('issue__field-error-show')
        })
    }

    const closeModal = () => {
        setModal(!modal)
    }

    let type = null; 
    let options = null; 
    
    if (issue.selectedCategory === "Course registration") { 
      type = course; 
    } else if (issue.selectedCategory === "Hostel") { 
      type = hostel; 
    } else if (issue.selectedCategory === "Payment fees") { 
      type = payment; 
    } 
    
    if (type) { 
      options = type.map((el) => <option key={el}>{el}</option>); 
    }

    return (
        <div className="issue">
            <form onSubmit={handleSubmit}>
                <h2>Submit your issue</h2>
                <div className="issue__field">
                    <label>Name</label>
                    <input placeholder="Enter your name here" value={issue['name']} onChange={handleInput} id="name"/>
                    <div className={errorClass}>{errors['name']}</div>
                </div>
                <div className="issue__field">
                    <label>Email address</label>
                    <input placeholder="Enter your email here" value={issue['email']} onChange={handleInput} id="email"/>
                    <div className={errorClass}>{errors['email']}</div>
                </div>
                <div className="issue__field">
                    <label>Category of issue</label>
                    <select  onChange={handleInput} value={issue['selectedCategory']}  id="selectedCategory">
                        <option>Choose...</option> 
                        <option>Course registration</option> 
                        <option>Hostel</option> 
                        <option>Payment fees</option> 
                    </select>
                    <div className={errorClass}>{errors['selectedCategory'] ? errors['selectedCategory'] : ''}</div>
                </div>
                <div className="issue__field">
                    <label>Subcategory of issue</label>
                    <select onChange={handleInput} value={issue['selectedSubCategory']} id="selectedSubCategory">
                        {options}
                    </select>
                    <div className={errorClass}>{errors['selectedSubCategory']}</div>
                </div>
                <div className="issue__field">
                    <label>Description of issues</label>
                    <textarea placeholder="Enter your description of issues here" value={issue['description']} 
                    onChange={handleInput} id="description"></textarea>
                    <div className={errorClass}>{errors['description']}</div>
                </div>
                <div className="issue__button">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <Popup modal={modal} closeModal={closeModal}></Popup>
        </div>
    )
}

export default IssuePage