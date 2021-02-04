import React from 'react';

class Skills extends React.Component {
    render() {
        return (
            <div id="skills" style={{ textAlign: 'center' }}>
                <h1 style={{fontFamily:'sans-serif'}}>Programming Languages that I Know</h1><br /><br />

                <h4 style={{fontFamily:'sans-serif'}}>JavaScript</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-1" className="progress-bar" role="progressbar" style={{width:'85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div><br />
                <h4 style={{fontFamily:'sans-serif'}}>React</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-2" className="progress-bar" role="progressbar" style={{width:'75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div><br />
                <h4 style={{fontFamily:'sans-serif'}}>Redux</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-3" className="progress-bar" role="progressbar" style={{width:'25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div><br />
                <h4 style={{fontFamily:'sans-serif'}}>C</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-4" className="progress-bar" role="progressbar" style={{width:'50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div><br />
                <h4 style={{fontFamily:'sans-serif'}}>Python</h4>
                <div id="prog" className="progress">
                    <div id="prog-bar-5" className="progress-bar" role="progressbar" style={{width:'15%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <hr id="divider" className="divider"></hr>

            </div>
        )
    }
}

export default Skills