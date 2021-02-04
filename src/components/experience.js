import React from 'react';
import EXP1 from '../images/exp1.png';
import EXP2 from '../images/exp2.jpg';

class Experience extends React.Component {
    render() {
        return (
            <div id="exp">
                <div>
                <h1 id="Experience" style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
                    Experience
                </h1>
                </div>
                <br /><br />
                <div className="container">
                    <div className="row">

                <div className="card swing col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{width:'18rem',padding:'0%'}}>
                    <img src={EXP1} class="card-img-top" alt="company-logo" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>

                <div className="card swing col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{width:'18rem',padding:'0%'}}>
                    <img src={EXP2} class="card-img-top" alt="company-logo" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>

                    </div>
                </div>

                <hr id="divider" className="divider"></hr>
                <div style={{textAlign:'center'}}>
                <h2>Thanks for visiting my Web-Folio</h2>
                <p>Made by RafayAsad</p>
                <p>Github @RafayAsad</p>
                </div>

                </div>
        )
    }
}

export default Experience;