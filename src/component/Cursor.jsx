import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Cursor.css'

function Cursor() {
    const mouseShadowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            gsap.to(mouseShadowRef.current, {
                x: event.clientX - 950,
                y: event.clientY - 850,
                ease: "back.out",
            });
        };

        // Add the event listener for mouse move
        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div id="mouseshadow" ref={mouseShadowRef}></div>
    );
}

export default Cursor;
