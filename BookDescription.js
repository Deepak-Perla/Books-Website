
let parms;
let bookId;

// window.addEventListener("load",() => {
//     parms = (new URL(document.location)).searchParams
//     id = parseInt(parms.get("id"))
// })

parms = (new URL(document.location)).searchParams
bookId = parseInt(parms.get("bookId"))


fetchData()

async function fetchData(){
    try{
        const data = await fetch("BookDescription.json")
    const response = await data.json()
    console.log(response[bookId].title,bookId)
    document.getElementById("Title").innerHTML = response[bookId].title
    document.getElementById("Image").src = response[bookId].image
    document.getElementById("Description").innerHTML = response[bookId].description
    document.getElementById("Download").href = "https://drive.google.com/uc?export=download&id=" + response[bookId].urlid
    document.getElementById("WebView").href = "https://drive.google.com/viewerng/viewer?embedded=true&url=https://drive.google.com/uc?id=" + response[bookId].urlid

    Heart()

    }
    catch(err){
        // document.getElementById("Title").innerHTML = "response[bookId].title"
        console.log("Error")
        document.getElementById("NotFound").innerHTML = "<div style=\"top:50%;left: 50%;transform: translate3d(-50%,-50%, 0);position: absolute;\"><img src=\"https://cdn.dribbble.com/users/1278258/screenshots/4110477/error800600_4.jpg\"></img></div>"
    }
    
}

function goBack(){
    window.history.back();
}


function Heart(){
    let heart = document.getElementById("Heart")
    if(localStorage.getItem("bookId"+bookId) == null){
        localStorage.setItem("bookId"+bookId,"🤍")
    }
    heart.innerHTML = localStorage.getItem("bookId"+bookId)
}

function HeartToggle(){
    let heart = document.getElementById("Heart")
    if(heart.innerHTML == "❤️"){
        heart.innerHTML = "🤍"
        localStorage.setItem("bookId"+bookId,"🤍")
    }
    else{
        heart.innerHTML = "❤️"
        localStorage.setItem("bookId"+bookId,"❤️")
    }
}


