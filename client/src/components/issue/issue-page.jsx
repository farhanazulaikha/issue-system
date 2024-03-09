import './issue-page.css'
import { course, hostel, payment } from '../../data/data';
import { useState } from "react"

function IssuePage() {

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");

    const changeSelectOptionHandler = (event) => { 
        setSelectedCategory(event.target.value); 
    };

    const changeSelectSubOptionHandler = (event) => { 
        setSelectedSubCategory(event.target.value); 
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    let type = null; 
    let options = null; 
    
    if (selectedCategory === "Course registration") { 
      type = course; 
    } else if (selectedCategory === "Hostel") { 
      type = hostel; 
    } else if (selectedCategory === "Payment fees") { 
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
                    <input placeholder="Enter your name here"/>
                </div>
                <div className="issue__field">
                    <label>Email address</label>
                    <input  placeholder="Enter your email here"/>
                </div>
                <div className="issue__field">
                    <label>Category of issue</label>
                    {/* select value={state} */}
                    <select onChange={changeSelectOptionHandler} value={selectedCategory}>
                        <option>Choose...</option> 
                        <option>Course registration</option> 
                        <option>Hostel</option> 
                        <option>Payment fees</option> 
                    </select>
                </div>
                <div className="issue__field">
                    <label>Subcategory of issue</label>
                    <select  onChange={changeSelectSubOptionHandler} value={selectedSubCategory}>
                        {options}
                    </select>
                </div>
                <div className="issue__field">
                    <label>Description of issues</label>
                    <textarea placeholder="Enter your description of issues here"></textarea>
                </div>
                <div className="issue__button">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default IssuePage