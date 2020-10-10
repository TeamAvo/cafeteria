export default class GoogleImageSearch {
    static async searchImage(query) {
        query = encodeURIComponent(query)
        // Fetches Items from Google Image Search URL
        await fetch("https://cors-anywhere.herokuapp.com/https://www.google.com/search?source=lnms&sa=X&gbv=1&tbm=isch&q=" + query)
            .then(res => res.text())
            .then(res => {
                let parser = new DOMParser()
                parser = parser.parseFromString(res, "text/html")
                let images = parser.getElementsByTagName("img")
                console.log(images[1].src)
                return (images[1].src)
            })
    }
}
