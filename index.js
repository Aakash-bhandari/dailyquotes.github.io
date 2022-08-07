let readabledata = '';
const quotes = document.getElementById('text');
const author = document.getElementById('author');
const next = document.getElementById('arrow');
const getnewquotes = () => {
  let rnum = Math.floor(Math.random() * 1000);
  quotes.innerHTML = `${readabledata[rnum].text}`
  author.innerText = `${readabledata[rnum].author}`

}

const getquotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    const data = await fetch(api);
    readabledata = await data.json();
    getnewquotes();
  }
  catch (error) {
    console.log(error)
  }
}
next.addEventListener('click', () => {
  getnewquotes();
})
getquotes();
