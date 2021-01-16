import React from 'react';

class BackToTop extends React.Component {
    render() {
        window.onscroll = () => {
            let b2t = document.querySelector("#b2t");
            if (document.documentElement.scrollTop > 300) {
                b2t.style.display = "block";
            } else {
                b2t.style.display = "none";
            }
            b2t.addEventListener("click", () => {
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