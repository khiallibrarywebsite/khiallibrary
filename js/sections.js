let storage = {
  fetch() {
    let books = JSON.parse(localStorage.getItem('books'));
    return books.length ? books : []
  },
  save(data) {
    localStorage.setItem('books', JSON.stringify(data))
  }
}
async function getData() {
  console.log('start');
  if (document.getElementById('dataPrint')) document.getElementById('dataPrint').innerHTML = `<div id="gif"><img src="gif.gif"/></div>`;
  return await fetch('https://api.airtable.com/v0/app6VIh7RghR5RdS3/%D8%A7%D9%84%D8%B1%D9%8A%D8%B3%D9%8A%D8%A9', {
    headers: {
      "Authorization": "Bearer keykb7rVGd1latZ9a"
    }
  }).then(res => res.json()).then(data => {
    storage.save(data.records)
    for (let record of data.records) {
      if (document.getElementById('dataPrint')) {
        dataPrint.innerHTML += `
        <section class="section__style">
          <h2><a href="books#${record.id}">${record.fields.Name}</a></h2>
          <div class="d-flex align-items-center justify-content-center">
            ${record.fields.Notes}
          </div>
        </section>
      `
      }
      document.getElementById('dropdownMenu').innerHTML += `
        <a class="dropdown-item" href="books.html#${record.id}"><i class="fas fa-book mx-1"></i> ${record.fields.Name}</a>
      `;
    }
    if (document.getElementById('dataPrint')) {
      setTimeout(function () {
        $('#dataPrint').children('#gif').hide();
      }, 4000)
    }
  })
}
getData()

function displayCategory(cate) {
  let section = document.createElement('section');
  section.className = "section__style"
  section.innerHTML = `
  <h2><a href="">${cate.fields.Name}</a></h2>
  <div class="d-flex align-items-center justify-content-center">
    ${cate.fields.Notes}
  </div>
  `;
  return section;
}

// Category page
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.navbar .fa-bars').addEventListener('click', () => {
    document.querySelector('.navbar .list-unstyled').classList.toggle('showMenu')
  })
  if (document.getElementById('dataPrint')) {
    let dataPrint = document.getElementById('dataPrint')
    let search = document.querySelector('.search input');
    let books = storage.fetch();
    search.addEventListener('keyup', () => {
      dataPrint.innerHTML = ''
      if (search.value === '') {
        dataPrint.innerHTML = `<div id="gif"><img src="gif.gif"/></div>`;
        for (let book of books) {
          dataPrint.append(displayCategory(book));
        }
        setTimeout(function () {
          $('#dataPrint').children('#gif').hide();
        }, 4000);
      } else {
        let bookFilters = books.filter(book => {
          return book.fields.Name.indexOf(search.value) !== -1
        });
        for (let book of bookFilters) {
          dataPrint.append(displayCategory(book))
        }

      }
    })
  }
})



