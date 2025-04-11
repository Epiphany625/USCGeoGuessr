const alignStyle = {
    width:"100%",
    height:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
}
const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    borderBottom: "1px solid #990000"
  };
  
  const navStyle = {
    display: "flex",
    gap:"1rem",
  };
  
  const mainStyle = {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "0 2rem",
  };
  
  const titleStyle = {
    color: "#990000",
    marginBottom: "1rem",
    fontSize: "4rem",
  };
  
  const formStyle = {
    marginTop: "50px",
  };
  
  const labelStyle = {
    fontWeight: 600,
    marginBottom: "0.5rem",
  };
  
  const inputStyle = {
    marginBottom: "1rem",
    padding: "0.5rem",
    width: "200px",
    border: "1px solid #990000",
    borderRadius:"10px"
  };
  
  const buttonGroupStyle = {
    display: "flex",
    gap: "30px",
    marginTop: "1rem",
  };
  
  const buttonCommonStyle = {
    border: "none",
    borderRadius:"30px",
    padding: "1rem 1.5rem",
    cursor: "pointer",
    color: "white",
    fontWeight:"bold",
  };
  
const Landing = ({userInfo}) => {

    const handleSinglePlayerSelection = (e) => {
        e.preventDefault();
    }

    const handleMultiPlayerSelection = (e) => {
        e.preventDefault();
    }

    const handleLeaderboardSelection = (e) => {
        e.preventDefault();
    }
    return (
        <div>
                <header style={headerStyle}>
                    <div>USC GeoGuessr</div>
                    <div style={navStyle}>
                        <p>Account Info</p>
                        <p>Log out</p>
                        <p>Acknowledgement</p>
                    </div>
                </header>
                <div style={alignStyle}>
                    <main style={mainStyle}>
                        <div>
                            <h1 style={titleStyle}>Ready, {userInfo.username}?</h1>
                            <h3 style={{color:"grey", fontWeight:"100"}}>Single Player - Play solo and test your USC map skills without scoring</h3>
                            <h3 style={{color:"grey", fontWeight:"100"}}>Multiple Player - Compete with others and rank in the leaderboard</h3>
                            <h3 style={{color:"grey", fontWeight:"100"}}>Leaderboard - See who is the boss</h3>
                        </div>
                        <form style={formStyle}>
                            <p style={labelStyle}>Game ID</p>
                            <input type="number" style={inputStyle}/>
                            <div style={buttonGroupStyle}>
                                <button style={{...buttonCommonStyle, backgroundColor:'#990000'}} onClick={handleSinglePlayerSelection}>SINGLE PLAYER</button>
                                <button style={{...buttonCommonStyle, backgroundColor: "#FFCC00"}} onClick={handleMultiPlayerSelection}>MULTIPLE PLAYER</button>
                                <button style={{...buttonCommonStyle, backgroundColor: "grey"}} onClick={handleLeaderboardSelection}>LEADERBOARD</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
    )
}

export default Landing;