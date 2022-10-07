import React from 'react' ;
import PropTypes  from 'prop-types';

const Profile = (props) => {
  return (
    <div>
    <div>
        fullName:{props.fullName}
    </div>
    <div>
        bio:{props.bio}
    </div>
    <div>
        Profession:{props.profession}
    </div>
    <img src={props.children} alt="mohamed" />
    <button onClick={()=> props.alerteInput(props.fullName)}>
        Click Me 
    </button>
    </div>
  )
}

Profile.defaultProps={
    fullName:"default mohamed",
    bio:"default bio",
    profession:"default profesion"
}

Profile.propTypes={
fullName: PropTypes.string,
 bio: PropTypes.string,
 profession: PropTypes.string,
 children: PropTypes.string,
 alertInput: PropTypes.func
}
export default Profile