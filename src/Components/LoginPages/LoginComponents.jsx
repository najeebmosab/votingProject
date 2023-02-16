import "./LoginComponents.css";
import { data } from "../Data/DataVoting";
import { useState } from "react";
function LoginComponents(props) {
    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState({
        email: "",
        password: "",
        user: ""
    });

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    function checkValidate(data) {
        if (data.name == "email") {
            const res = validateEmail(data.value);
            console.log("isValid", res);
            if (res) {
                formData[data.name] = data.value;
                error.email = "";
            }
            else {
                error.email = "Please enter a valid email address.";
            }
        }
        else {
            formData[data.name] = data.value;
        }
        setFormData({ ...formData });
        setError({ ...error });

    }

    function checkPasswordValidate(data) {
        if (data.name == "password") {


            if (data.value != "") {
                formData[data.name] = data.value;
                error.password = "";
            }
            else {
                error.password = "Please enter a valid password address.";

            }
        }
        else {
            formData[data.name] = data.value;
        }
        setError({ ...error });

    }

    function validateEmail(email) {
        // regular expression for email validation
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    function submitHandler(params) {
        params.preventDefault();
        const res = loginData.find(data => { return data.email === formData.email && data.password === formData.password })
        if (res != null) {
            props.dataUser(res);
            props.newFlag(!props.flag);
            error.user = ""

        }
        else {
            error.user = "User Not Found";
            error.password = "Please enter a valid password address.";
        }
        setError({ ...error });
        console.log(res);
    }


    return (
        <>
            <div className="continerForm">
                <div className="cardLogin">
                    <form action="" onSubmit={submitHandler}>
                        <div>
                            <p className={error.length != 0 ? "redText" : ""} >{error.user}</p>
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input placeholder="email" type="email" name="email" onChange={(e) => checkValidate(e.target)} />
                            <p className={error.length != 0 ? "redText" : ""} >{error.email}</p>
                        </div>

                        <div>
                            <label htmlFor="">Password</label>
                            <input placeholder="password" type="password" name="password" onChange={(e) => checkPasswordValidate(e.target)} />
                            <p className={error.length != 0 ? "redText" : ""} >{error.password}</p>
                        </div>
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    )
}

export { LoginComponents }