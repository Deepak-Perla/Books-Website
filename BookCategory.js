
const htmlFirst = '<div class="GridItem"><a href="'
const htmlMiddle = '"><img class="BookImage" src="'
const htmlLast = '" alt="Book Image"></a></div>'


let parms = (new URL(document.location)).searchParams
let category = parms.get("category")

var coverImageCount = 2


console.log(category)

FetchData()

async function FetchData(searchValue = " ") {

    const data = await fetch("BookCategory.json")
    const response = await data.json()
    if (category != undefined) {
        console.log("If condition", category)
        document.getElementById("BooksGrid").innerHTML = ""
        books = response[category]
        document.getElementById("CoverText").innerHTML = category
        // Change cover Image
        ChangeCover()
        // Update category color
        ChangeCategoryColor(category)
        for (let key in books) {
            if (books[key][0].toLowerCase().search(searchValue) != -1 || searchValue == " ") {
                document.getElementById("BooksGrid").innerHTML += htmlFirst + "BookDescription.html?bookId=" + String(key) + htmlMiddle + "Assets/" + category + "/" + books[key][0] + "/" + books[key][1] + htmlLast
            }
        }
    }
    else {
        console.log("else condition", category)
        document.getElementById("BooksGrid").innerHTML = ""
        for (let bookCategory in response) {
            books = response[bookCategory]
            for (let key in books) {
                if (books[key][0].toLowerCase().search(searchValue) != -1 || searchValue == " ") {
                    document.getElementById("BooksGrid").innerHTML += htmlFirst + "BookDescription.html?bookId=" + String(key) + htmlMiddle + "Assets/" + bookCategory + "/" + books[key][0] + "/" + books[key][1] + htmlLast
                }
            }
        }
    }
}

function Search() {

    const searchValue = document.getElementById("Search").value.toLowerCase()
    FetchData(searchValue)

}


function goBack() {
    window.history.back();
}

function ChangeCover(){
    document.getElementById("Cover").src = `images/Cover/cover${RandomRange(2,6)}.jpg`
}

function RandomRange(min,max){
    // window.coverImageCount++;
    // console.log((coverImageCount%(max-min)) + min,coverImageCount)
    // return (coverImageCount%(max-min)) + min;
    // return Math.floor(Math.random()*(max-min)) + min;
    return 3;
}

function ChangeCategoryColor(category){
    document.getElementById(category).style.backgroundColor = "pink"
}

function CharacterDescription(){
    let char = document.getElementById("CharacterDescriptionText")
    if(char.style.visibility == "hidden"){
        char.style.visibility = "visible"
    }
    else{
        char.style.visibility = "hidden"
    }
}