const loadData = async (inputData) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputData}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data[0])
}

document.getElementById("search-btn").addEventListener("click", function(){
    const inputText = document.getElementById("input").value;
    loadData(inputText)
})
