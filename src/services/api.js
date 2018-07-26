import {GOOGLE_PLACE_DETAIL_URL} from "./../constants/urls";

export const fetchGoogleApi = (lat, lng) => {
    const xhr = new XMLHttpRequest();
    let url = `${GOOGLE_PLACE_DETAIL_URL}?latlng=${lat},${lng}&sensor=true`;
    xhr.open('GET', url, true);
    xhr.send();
    return new Promise(function (resolve, reject) {
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status === 200) {
                if(typeof this.responseText === "string") {
                    const response = JSON.parse(this.responseText);
                    resolve(response);
                } else {
                    reject("Unable to fetch your address");
                }
            } else if(this.readyState == 4 && this.status !== 200){
                reject("Unable to fetch your address");
            }
        }
    });
}
