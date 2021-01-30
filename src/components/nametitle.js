import React from 'react';

class Nametitle extends React.Component{
    render(){
        return(
            <h2 id="title" style={{textAlign:'center',display:'grid'}}>Hello there !
                <span style={{color:'#0a46ce'}} id="name">I'm Rafay Asad</span>
            </h2>
        )
    }
}

export default Nametitle;