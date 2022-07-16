let storageData = {
  fetch() {
    let authors = JSON.parse(localStorage.getItem('authors'));
    return authors.length ? authors : []
  },
  save(data) {
    localStorage.setItem('authors', JSON.stringify(data))
  }

}

async function getData() {
  document.getElementById('authors').innerHTML = `<div id="gif"><img src="gif.gif"/></div>`;
  return await fetch('https://api.airtable.com/v0/app6VIh7RghR5RdS3/%D8%A3%D9%84%D9%83%D8%AA%D8%A7%D8%A8', {
    headers: {
      "Authorization": "Bearer keykb7rVGd1latZ9a"
    }
  }).then(res => res.json()).then(data => {
    console.log(data)
    storageData.save(data.records)
    if (document.getElementById('authors')) {
      let authorContainer = document.getElementById('authors');
      for (let author of data.records) {
        authorContainer.innerHTML += `
      
      <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
        <div class="card">
          <img class="card-img-top" src="${author.fields.Attachments[0].url}">
          <div class="card-body" style="    height: 250px;
    overflow: auto;">
            <h3 class="card-title" data-id="${author.id}"><a href="author.html#${author.id}" style="text-decoration: none; color: #222; outline: none;">${author.fields.Name}</a></h3>
            <p class="card-text">${author.fields['1']}</p>
          </div>
        </div>
        </div>
      `
      }
      $('#authors').children('#gif').hide();
    }
  })
}
getData()



function displayAuthor(author) {
  let div = document.createElement('div');
  div.className = "col-sm-6 col-md-4 col-lg-3 mb-"
  div.innerHTML = `
  <div class="card">
  <img class="card-img-top" src="${author.fields.Attachments[0].url}">
  <div class="card-body" style="    height: 250px;
    overflow: auto;>
  <h3 class="card-title" data-id="${author.fields.Name}"><a href="author.html#${author.id}" style="text-decoration: none; color: #222; outline: none;">${author.fields.Name}</a></h3>
    <p class="card-text">${author.fields['1']}</p>
  </div>
</div>
  `;
  return div;
}



// Category page
window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('authors')) {
    let authorsData = storageData.fetch();
    let authors = document.getElementById('authors')
    let search = document.querySelector('.search input');
    console.log(authors)
    search.addEventListener('keyup', () => {
      authors.innerHTML = ''
      if (search.value === '') {
        for (let author of authorsData) {
          authors.append(displayAuthor(author))
        }
      } else {
        let authorFilters = authorsData.filter(author => {
          return author.fields.Name.indexOf(search.value) !== -1
        });
        console.log(authorFilters)
        for (let author of authorFilters) {
          authors.append(displayAuthor(author))
        }
      }
    })
  }
  if (document.getElementById('authorSingular')) {
    let authorsData = storageData.fetch();
    let selectedAuthor = authorsData.filter(author => author.id === location.hash.replace('#', ''))
    console.log(selectedAuthor)
    document.getElementById('authorSingular').innerHTML = `
      <div class="p-3 bg-white border-1 singular d-flex align-items-center justify-content-center">
        <img class="img-thumbnail mr-3 rounded-circle" src="${selectedAuthor[0].fields.Attachments[0].url}" alt="" >
        <div class="author__info">
          <h2>${selectedAuthor[0].fields.Name}</h2>
          <p>${selectedAuthor[0].fields['1']}</p>
        </div>
      </div>
      <div class="mt-4">
        <h3>المؤلفات</h3>
        ${selectedAuthor[0].fields.mobile}
      </div>
    `
  }


})

