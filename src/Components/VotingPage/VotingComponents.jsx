import "./VotingComponents.css"
function VotingComponents(props) {
    return (
        <>
            <div className="containerVotingComponents">
                <div className="containerVoting">
                    <div className="cardVoting">
                        <h2>dogs party</h2>
                        <h2>{props.dataUser.type}</h2>
                        <h2>{props.dataUser.password}</h2>
                        <h2>{props.dataUser.email}</h2>
                    </div>
                    <div className="cardVoting">
                        <h2>cat party</h2>
                        <h2>{props.dataUser.type}</h2>
                        <h2>{props.dataUser.password}</h2>
                        <h2>{props.dataUser.email}</h2>
                    </div>
                    <div className="cardVoting">
                        <h2>cow  party</h2>
                        <h2>{props.dataUser.type}</h2>
                        <h2>{props.dataUser.password}</h2>
                        <h2>{props.dataUser.email}</h2>
                    </div>
                    <div className="cardVoting">
                        <h2>lion party</h2>
                        <h2>{props.dataUser.type}</h2>
                        <h2>{props.dataUser.password}</h2>
                        <h2>{props.dataUser.email}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export { VotingComponents }