let marker= document.getElementById('marker')

let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
let targetUrl = "https://quote-garden.herokuapp.com/quotes/random"

fetch(proxyUrl+targetUrl)
.then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
.then(response => {
  let leap = response.quoteText
  // marker.innerHTML = leap;
  console.log(response)

  console.log(leap.split(" "))
  let words = leap.split(" ")
  for (i = 0; i < words.length; i++) {
    // console.log(words[i]);
    let span = document.createElement("SPAN");
    span.innerHTML = words[i]//takes each word and puts it into a span
    marker.appendChild(span);
    let space= document.createElement("SPAN")
    space. innerHTML= " " // adds sapce to the span
    marker.appendChild(space);
    let theWord = words[i]
    span.addEventListener("click", function(){

      // console.log('you clicked',theWord)
      fetch("https://dictionaryapi.com/api/v3/references/collegiate/json/"+theWord +"?key=fa9cfedb-4946-4fea-b3d2-cb52d9b52bf0")//concatenation with the word
          .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
          .then(response => {
            let def = response[0].shortdef[0]
            // let def= response[0].def[0].sseq[0][0][1].dt[0][1]
            // console.log(response[0].def[0].sseq[0][0][1].dt[0][1])
            // let def= response[0].def[0].sseq[0][0][1].dt[0][1]
            console.log(response)


            document.getElementById('spanTwo').textContent = def

          })
          .catch(err => {
              console.log(`error ${err}`)
              // alert("sorry, there are no results for your search")


    });




    });

  }

})
