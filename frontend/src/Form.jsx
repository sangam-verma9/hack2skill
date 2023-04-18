import React, { useState } from "react";
import swal from "sweetalert";
const Form = () => {
    const [val1, setval1] = useState("");
    const [val2, setval2] = useState("");
    const [val3, setval3] = useState("");
    const [val4, setval4] = useState("");
    const changeoccur1 = (e) => {
        setval1(e.target.value)
    }
    const changeoccur2 = (e) => {
        setval2(e.target.value)
    }
    const changeoccur3 = (e) => {
        setval3(e.target.value)
    }
    const changeoccur4 = (e) => {
        setval4(e.target.value)
    }
    const confermation = () => {
        if ((val1 && val2 && val3 && val4) !== "") {
            swal({
                title: "Thanks for contect us!",
                icon: "success",
            });
        }
    }

    function onFormSubmit(event) {
        event.preventDefault();
    }
    return (
        <>
            <form onsubmit={onFormSubmit}>
                <div className="form-group">
                    <label>Full Name:</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={val1} onChange={changeoccur1} placeholder=" Name" autoComplete="off" required />
                </div>
                <div className="form-group">
                    <label>Email address:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={val2} onChange={changeoccur2} placeholder="Email" autoComplete="off" required />
                </div>
                <div className="form-group">
                    <label>Phone No.</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" value={val3} onChange={changeoccur3} placeholder="Phone Number" autoComplete="off" required />
                </div>
                <div className="form-group">
                    <label>Address with zip code:</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={val4} onChange={changeoccur4} placeholder="Address" autoComplete="off" required />
                </div>

                <div>
                    <button type="submit" className="btn btn-primary" onClick={confermation}>Submit</button>
                </div>
            </form>
        </>
    )
}
export default Form;