
function Profile(props) {
    const StyleObject1={width:"150px", height:"120px", borderRadius:"5px"}
    const StyleObject2={backgroundColor:"#2596be", color:"white", borderRadius:"5px"}
    function handleName(e) {
        e.preventDefault();
        alert(`${props.profile}`)
    }
    return (
        <div className="container">
            <img src={props.image} alt=""style={StyleObject1}/>

            <a href="/" onClick={handleName} style={StyleObject2}>Profile</a>
            <p>{props.bio}</p>
            <h3>{props.profession}</h3>
        </div>
    );
}
export default Profile;