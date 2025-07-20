const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ color: 'blue', fontSize: '24px', margin: '0 0 10px 0' }}>{props.name}</h2>
            <p style={{ margin: '5px 0', fontSize: '16px' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p style={{ margin: '5px 0', fontSize: '16px' }}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;