import './issue-page.css'
import { course, hostel, payment } from '../../data/data';
import { useState } from "react"

function IssuePage() {

    const [issue, setIssue] = useState({
        name: "",
        email: "",
        selectedCategory: "",
        selectedSubCategory: "",
        description: ""
    })

    const handleInput = (event) => { 
        const {id, value} = event.target;

        setIssue(prevState => ({
            ...prevState,
            [id]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                </div>
                <div className="issue__field">
                    <label>Email address</label>
                    <input placeholder="Enter your email here" value={issue['email']} onChange={handleInput} id="email"/>
                </div>
                <div className="issue__field">
                    <label>Category of issue</label>
                    <select  onChange={handleInput} value={issue['selectedCategory']}  id="selectedCategory">
                        <option>Choose...</option> 
                        <option>Course registration</option> 
                        <option>Hostel</option> 
                        <option>Payment fees</option> 
                    </select>
                </div>
                <div className="issue__field">
                    <label>Subcategory of issue</label>
                    <select onChange={handleInput} value={issue['selectedSubCategory']} id="selectedSubCategory">
                        {options}
                    </select>
                </div>
                <div className="issue__field">
                    <label>Description of issues</label>
                    <textarea placeholder="Enter your description of issues here" value={issue['description']} 
                    onChange={handleInput} id="description"></textarea>
                </div>
                <div className="issue__button">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default IssuePage