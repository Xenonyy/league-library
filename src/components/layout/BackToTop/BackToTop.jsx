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
            });
        }
        window.onload = () => {
            document.querySelector("button > img").addEventListener("click", (e) => {
                e.stopPropagation();
                e.preventDefault();
            });
            document.querySelector("#b2t").addEventListener("click", () => {
                document.documentElement.scrollTop = 0;
            });
        }
    return(
        <button id = "b2t">
            <img src = "https://i.gyazo.com/8fde68144b0fe90786b9472cdcad77f1.png" srcSet = "https://i.gyazo.com/8fde68144b0fe90786b9472cdcad77f1.png, https://i.gyazo.com/25bca84d684ddfe5d7dd4aaec54f92e6.png" alt = "Scroll To The Top" id = "b2t-img"></img>
        </button>
        )
    }
}

export default BackToTop;