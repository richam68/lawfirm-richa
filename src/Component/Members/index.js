import Avatar from '@mui/material/Avatar';
import "./members.css"
const Members = () => {
    return(
        // <div className='members-container'>
            <div className='member-content'>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <div className='member-info'>
            <h4 className='member-name'>Sanfole</h4>
            <p className='member-cases'>850 Cases</p>
            </div>
            </div>
        // </div>
    )
};

export default Members