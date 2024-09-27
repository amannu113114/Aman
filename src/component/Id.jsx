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
                        <div class="id-card">
                            <div class="photo">
                                <img src="self.jpeg" alt="User Photo" />
                            </div>
                            <div class="info">
                                <div class="company">
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
                                <div class="name">aman kumar</div>
                                <div id="information">
                                    <div id="degree"><span>Degree:</span> B. Tech</div>
                                    <div id="college"><span>College:</span> D.C.E.</div>
                                    <div id="address"><span>Address:</span> Darbhanga</div>

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