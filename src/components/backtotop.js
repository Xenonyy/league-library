import React from 'react';

class BackToTop extends React.Component {
    render() {
        window.onload = () => {
            let b2t = document.getElementById("b2t");
            window.onscroll = () => {scrollFunc();}
            function scrollFunc() {
                if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                    b2t.style.display = "block";
                } else {
                    b2t.style.display = "none";
                }
            }

            b2t.addEventListener("click", () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            })
        }
    return(
        <button id = "b2t" >
            <img src = "https://i.gyazo.com/8fde68144b0fe90786b9472cdcad77f1.png" alt = "Scroll To The Top" id = "b2t-img"></img>
        </button>
        )
    }
}

export default BackToTop;