import propTypes from 'prop-types';



function Card({name = 'guest',bio = 'i do nothing',profilePic}){

    const handleClick = (e)=> {
        e.target.style.display = 'none'
    }
    return (
        <div className='card'>
            <img className='card-image' src={profilePic} alt="" />
            <button onClick={(e)=>handleClick(e)}>HI</button>
            <h1>{name}</h1>
            <p>{bio}
            </p>
        </div>
    );
}

Card.propTypes = {
    name : propTypes.string,
    bio : propTypes.string
}


export default Card;