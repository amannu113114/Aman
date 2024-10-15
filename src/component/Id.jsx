import React, { useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';



import './Id.css'

function Id() {
    useEffect(() => {
        const handleDocumentClick = (event) => {
            const summaryElement = document.querySelector('summary');
            const clickedElement = event.target;
            if (!summaryElement.contains(clickedElement)) {
                const detailsElement = summaryElement.parentNode;
                detailsElement.open = false;
            }
        };
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);
    return (
        <div id='Ids'>
            <details>
                <summary>
                    <div id="identity">
                        <h3>IDENTITY</h3>

                    </div>
                </summary>
                <div id="Id">
                    <div id="boundary">
                        <div className="id-card">
                            <div className="photo">
                                <img src="aman.jpeg" alt="User Photo" />
                            </div>
                            <div className="info">
                                <div className="company">
                                    <p>U</p>
                                    <p>N</p>
                                    <p>F</p>
                                    <p>I</p>
                                    <p>N</p>
                                    <p>I</p>
                                    <p>S</p>
                                    <p>H</p>
                                    <p>E</p>
                                    <p>D</p>
                                </div>
                                <div className="name">aman kumar</div>
                                <div id="information">
                                    <div id="info">

                                        <div id="degree"><span>Position:</span> Developer</div>
                                        <div id="college"><span>Work As:</span> Frontend</div>
                                        <div id="address"><span>Experience:</span> 1+ years</div>
                                        <div id="addresss"><span>Grade:</span> A+</div>
                                    </div>
                                    <div id="overlays">
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    {/* <div id='cross'>
                        <FontAwesomeIcon icon={faTimes} />
                    </div> */}
                </div>
            </details>
        </div>
    )
}

export default Id