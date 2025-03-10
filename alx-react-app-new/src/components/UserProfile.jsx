function UserProfile(props) {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: 'blue', fontSize: '20px' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold', color: 'darkred' }}>{props.age}</span></p>
            <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;
