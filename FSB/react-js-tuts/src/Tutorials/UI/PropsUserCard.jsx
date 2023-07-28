// In this hands-on exercise, we will work on a component called UserCard which has to accept data using props. We will implement props in this function component so that it accepts data from a resource.

// Here we’re rendering instances of the UserCard component here using a map function on a data Array that is being fetched from an external file. However, the three UserCard instances show the same data. We can use props to accept dynamic data from the resource.

// Open UserCard.js. Begin by accepting name, designation, isAdmin and photo as props by modifying the code as shown below.

const UserCard = ({ name, designation, photo, isAdmin }) => (

    <div className="user-card">

        <img
            src={photo}
            alt={name}
        />

        <div className="user-name">{name}</div>

        <div className="designation">{designation}</div>

        {
            isAdmin ? <div className="admin">A</div> : null
        }

    </div>

);

export default UserCard;


