const loadData = async () => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data[0])
}



loadData();