const loadData = async (inputData) => {
  try {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputData}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    showData(data[0]);
  } catch (err) {
    // alert("can not find word");
    // window.location.reload();
    // console.log(err)
  }
};

const showData = (word) => {
    console.log(word)
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  const postDiv = document.createElement("div");
  postDiv.classList.add("p-10", "border", "border-sky-500", "rounded-lg");
  postDiv.innerHTML = `
    <div class="lg:flex items-center justify-between">
        <div>
            <h2 class="text-6xl font-bold font-serif">${word.word}</h2>
            <p class="text-2xl text-blue-600/100 font-medium">${
            word.phonetic ? word.phonetic : word.phonetics[1].text
            }</p>
        </div>
        <div>
            <audio class="w-[200px] my-2" src="${word.phonetics[0].audio || word.phonetics[1].audio || word.phonetics[2].audio}" type="audio/mp3" controls></audio>
        </div>
    </div>
    <p class="my-5 font-bold text-2xl font-medium">${
      word.meanings[0].partOfSpeech
    } <hr></p>
    <p class="my-2  font-medium">Meaning</p>
        <li class="list-disc font-medium">${
          word.meanings[0].definitions[0].definition
        }</li>
        <li class="list-disc font-medium">${
          word.meanings[0].definitions[1].definition ? word.meanings[0].definitions[1].definition : "this is most commonly used word"
        }</li>
        <li class="list-disc font-medium">${
          word.meanings[0].definitions[2].definition ? word.meanings[0].definitions[2].definition : "old english word"
        }</li>
    <h4 class="my-5 font-medium">Synonyms : <span class="text-blue-600/100">${
      word.meanings[0].synonyms[0] ? word.meanings[0].synonyms[0] : word.word
    }</span></h4>
    <p class="my-5 font-bold text-2xl font-medium">${
      word.meanings[1].partOfSpeech
    } <hr></p>
    <p class="my-2 font-medium">Meaning</p>
        <li class="list-disc font-medium">${
          word.meanings[1].definitions[0].definition
        }</li>
        <li class="list-none font-medium text-blue-600/75">${
          word.meanings[1].definitions[0].example
            ? word.meanings[1].definitions[0].example
            : '"make a example by your own"'
        }</li>
    <p class="my-5 font-medium">Source : <span class="text-blue-600/75 underline underline-offset-1">${
      word.sourceUrls[0]
    }</span></p>
  `;
  wordContainer.appendChild(postDiv);
};

document.getElementById("search-btn").addEventListener("click", function () {
  const inputText = document.getElementById("input").value;
  if (inputText === "") {
    alert("please type your word");
  } else {
    loadData(inputText);
  }
});
