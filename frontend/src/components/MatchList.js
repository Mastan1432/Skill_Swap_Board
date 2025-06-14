import React from 'react'
import "../styles/MatchList.css"

const MatchList = ({posts,userMobile}) => {

    const findMatches=()=>{
        if(!userMobile) return [];

        let matches=[];
        const currentUser=posts.find(post=>post.mobile===userMobile);

        if(!currentUser) return[];

        posts.forEach(post => {
            if(
                currentUser.mobile !== post.mobile &&
                currentUser.teach.toLowerCase() === post.learn.toLowerCase() &&
                currentUser.learn.toLowerCase() === post.teach.toLowerCase()
            ){
                matches.push(`${currentUser.name} can swap skills with ${post.name} (Mobile:${post.mobile})`);
            }
        });

        return matches;
    }
  return (
    <div className='match-container'>
        <h3>Matches Found</h3>

        {findMatches().length>0 ?
        (
            findMatches().map( (match,i)=>(<div key={i} >{match}</div>) )
        ):
        (<div >No matches Found</div>)}
    </div>
  )
}

export default MatchList