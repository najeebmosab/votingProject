import { useState } from "react";
import "../DashbordComponents/DashbordComponent.css";
import { data } from "../Data/DataVoting";
function DashbordComponent(props) {
    const [Users, setUsers] = useState(data);
    let res = props.dataUser;
    console.log(res)
    if(res == null)
    {
        res=[];
    }
    function showData() {

        return (
            <>
                {
                    Users.map(
                        (u, idx) => {
                            return (
                                <>

                                    <tr key={idx} className={res.find((resData) => { return resData.name == u.name && resData.email == u.email }) != null ? "trGreen" : ""}>

                                        <td>{u.name}</td>
                                        <td>{u.email}</td>

                                        <td>{res.find((resData) => { return resData.name == u.name && resData.email == u.email }) != null ? "true" : "false"}</td>
                                    </tr>

                                </>
                            )
                        }
                    )
                }

            </>
        )
    }
    return (<>
        <div>
            <div className="butons">
                <button onClick={() => {
                    localStorage.clear();
                    document.location.reload()
                }}>Logout</button>
            </div>
            <h2 style={{ textAlign: "center" }}>Totle: {res.length != null ? res.length : 0}</h2>
            <div>
                <table className="Tables">
                    <thead>
                        <th>name</th>
                        <th>email</th>
                        <th>did vote</th>
                    </thead>
                    <tbody>
                        {showData()}
                    </tbody>
                </table>


            </div>
        </div>
    </>)
}

export { DashbordComponent };