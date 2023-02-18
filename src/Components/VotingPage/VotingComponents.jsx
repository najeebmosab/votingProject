import "./VotingComponents.css";
import { useState } from "react";
import { Partys } from "../Data/VotingParty";
import { DashbordComponent } from "../DashbordComponents/DashbordComponent";


function VotingComponents(props) {
    const [flagDashbord, setFlagDashbord] = useState(false);
    const [partysData, setPartysData] = useState(Partys);

    const res = localStorage.getItem("Partys");

    function showDataVotingPartys() {

        return (
            <>
                {partysData.map((data, idx) => {
                    return (
                        <div className="cardVoting" key={idx}>
                            <h2>{data.name}</h2>
                            <div>
                                <img src={data.img} alt="" />
                            </div>
                            <h2>{data.numberVoting}</h2>
                            <div className="votingButton">
                                <button className={props.showBTNS ? "showBTN" : "toFlag"} onClick={(e) => {

                                    // console.log(e.target);
                                    setPartysData({ ...data }, data.numberVoting++);
                                    setPartysData([...Partys]);
                                    props.showBTNSHandlr(!props.showBTNS)

                                }}>voting</button>

                                <div className={!props.showBTNS ? "showBTN" : "toFlag"}>
                                    <button onClick={() => {
                                        localStorage.setItem("Partys", JSON.stringify(Partys));
                                        props.usersDataHandlr({ ...props.dataUser });

                                        alert("Voting Done")
                                    }}>Done</button>
                                    <button onClick={() => {
                                        setPartysData({ ...data }, data.numberVoting--);
                                        localStorage.setItem("Partys", JSON.stringify(Partys));
                                        setPartysData([...Partys]);
                                        props.showBTNSHandlr(!props.showBTNS)

                                    }}>Change</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }


    return (
        <>
            <div className={!flagDashbord?"vis viewDataUser":"unvis"} >
                <h2>{props.dataUser.name}</h2>
                <div>
                    <button onClick={() => {
                        props.showBTNSHandlr(true)
                        props.flagHandler(!props.flagToShowPage);
                    }}>Logout</button>

                    <button className={props.dataUser.type == "user" ? "toFlag" : "showBTN"} onClick={() => {
                        console.log(props)
                        setFlagDashbord(!flagDashbord);
                    }}>Dashbord</button>
                </div>
            </div>

            <div className={!flagDashbord?"vis containerVotingComponents":"unvis"} >
                <div className="containerVoting">


                    {showDataVotingPartys()}

                </div>
            </div>

            <div className={flagDashbord?"vis":"unvis"}>
                <DashbordComponent dataUser={props.usersData}></DashbordComponent>
            </div>
        </>
    );
}

export { VotingComponents }