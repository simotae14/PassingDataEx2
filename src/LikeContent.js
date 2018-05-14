import React from 'react';

const LikeContent = (props) => {
    /*
    profiles whit the movieId
    */
  	const { profilesLike, movieName, users } = props;
  	if (profilesLike.length > 0) {
      /*
      if there aren't profiles which like the movie return the name with the explanation
      */
      return (
        <div>
        	<h2>
        		{movieName}
        	</h2>
        	<ul>
        	{profilesLike.map((profileLike) => {
        		return <li key={profileLike.userID}>{users[profileLike.userID].name}</li>; 
      		})}
  			</ul>
        </div>      
      );
    } else {
      /*
      if there are profiles which like the movie return the name with the list of the users who like the movie
      */
      return (
        <div>
        	<h2>
        		{movieName}
        	</h2>
        	<p>None of the current users liked this movie</p>
        </div>  
      );      
    }
}

export default LikeContent;