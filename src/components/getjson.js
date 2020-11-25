function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        let status = xhr.status;
        if (status === 200) {
        callback(null, xhr.response);
        const parsed = JSON.parse(this.response);
        Object.keys(parsed.data).forEach(key => {
            cards.push(parsed.data[key]);
        });
        console.log(cards);
        return cards;
        } else {
        callback(status, xhr.response);
        }
    };
    xhr.send();
};
let cards = [];
getJSON('http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json',
    function(err, data) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            console.log('Successfully parsed!');
        }
    }
);