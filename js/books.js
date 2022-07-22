let storageCategory = {
  fetch() {
    let books = JSON.parse(localStorage.getItem("books-category"));
    return books.length ? books : [];
  },
  save(data) {
    localStorage.setItem("books-category", JSON.stringify(data));
  },
  fetchSelected() {
    let cate = JSON.parse(localStorage.getItem("selected-category"));
    return cate ? cate : {};
  },
  saveSelected(data) {
    localStorage.setItem("selected-category", JSON.stringify(data));
  },
};

let categories = [
  {
    id: "rec7VDNPF9oELirc4",
    title: "الكل",
    url: "https://api.airtable.com/v0/app6VIh7RghR5RdS3/%D8%A7%D9%84%D9%83%D9%84",
    name: "name",
    img: "IMAGE",
    link: "file link",
    download: "download",
    nu: "nu",
  },
  {
    id: "recZ1yazLPm3bRV6Y",
    title: "متنوع",
    url: "https://api.airtable.com/v0/app6VIh7RghR5RdS3/books%20%D9%85%D8%AA%D9%86%D9%88%D8%B9%D8%A9",
    name: "File name",
    img: "IMAGE",
    link: "Preview Link",
    download: "download",
    nu: "nu",
  },
  {
    id: "recto8xgsCpHUK8Mm",
    title: " المعاجم والقماويس والمجلات",
    url: "https://api.airtable.com/v0/app6VIh7RghR5RdS3/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AC%D9%85%20%D9%88%D8%A7%D9%84%D9%82%D9%85%D8%A7%D9%88%D9%8A%D8%B3%20%D9%88%D8%A7%D9%84%D9%85%D8%AC%D9%84%D8%A7%D8%AA",
    name: "Name",
    img: "صورة",
    link: "مشاهدة",
    download: "download",
    nu: "nu",
  },

  {
    id: "recTAdQRaeiQGbNwy",
    title: "شعر",
    url: "https://api.airtable.com/v0/app6VIh7RghR5RdS3/%D8%B4%D8%B9%D8%B1?maxRecords=999999999999999999999999&view=Grid%20view",
    name: "name",
    img: "image",
    link: "link",
    download: "download",
    nu: "nu",
  },
  {
    id: "recrUGb308MVjVPnF",
    title: "دين",
    url: "https://api.airtable.com/v0/app6VIh7RghR5RdS3/%D8%AF%D9%8A%D9%86",
    name: "filename",
    img: "image",
    link: "url",
    download: "download",
    nu: "nu",
  },
  {
    id: "recJdM6cyt8w53nRq",
    title: "مشروع كلمة",
    url: "https://api.airtable.com/v0/app6VIh7RghR5RdS3/%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D9%83%D9%84%D9%85%D8%A9",
    name: "name",
    img: "image",
    link: "url",
    download: "download",
    nu: "nu",
  },
  {
    id: "recnxVptymKyT5jDG",
    title: "فكر و فلسفة",
    url: "https://api.airtable.com/v0/app6VIh7RghR5RdS3/%D9%81%D9%83%D8%B1%20%D9%88%D9%81%D9%84%D8%B3%D9%82%D8%A9%20%D9%88%D9%85%D8%B9%D8%A7%D8%B1%D9%81",
    name: "name",
    img: "image",
    link: "url",
    download: "download",
    nu: "nu",
  },
  {
    id: "recjVbk0PwJOP4vOt",
    title: "مكتبة المجمع العربي للنشر والتوزيع",
    url: "https://api.airtable.com/v0/app6VIh7RghR5RdS3/tblAvmsnWa129AabA?",
    name: "Name",
    img: "image",
    link: "url",
    download: "download",
    nu: "nu",
  },
  {
    id: "recAxSTTuuRD7ZsRu",
    title: "تاريخ و جغرافيا",
    url: "https://api.airtable.com/v0/app6VIh7RghR5RdS3/%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20%D9%88%D8%A7%D9%84%D8%AC%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A7",
    name: "Name",
    img: "image",
    link: "url",
    download: "download",
    nu: "nu",
  },
  {
    id: "recyDXsUhpNRUuRQa",
    title: "كتب مترجمه",
    url: "https://api.airtable.com/v0/app6VIh7RghR5RdS3/tbl7J8vUeInTFFR1e?",
    name: "Name",
    img: "image",
    link: "url",
    download: "download",
    nu: "nu",
  },
  {
    id: "recHvhVHPAxCA3szi",
    title: "ثفافة و ادب",
    url: "https://api.airtable.com/v0/app6VIh7RghR5RdS3/%D8%AB%D9%82%D8%A7%D9%81%D8%A9%20%D9%88%20%D8%B1%D9%88%D8%A7%D9%8A%D8%A7%D8%AA%20%D9%88%D8%A7%D8%AF%D8%A8%20%D8%B9%D8%B1%D8%A8%D9%8A%20%D9%88%D8%B9%D8%A7%D9%84%D9%85%D9%8A",
    name: "Name",
    img: "image",
    link: "url",
    download: "download",
    nu: "nu",
  },
  {
    id: "receJNUaX8RkZTo6u",
    title: "طب",
    url: "https://api.airtable.com/v0/app6VIh7RghR5RdS3/%D8%B7%D8%A8",
    name: "Name",
    img: "image",
    link: "url",
    download: "download",
    nu: "nu",
  },
  {
    id: "rechq4GPrb4p33KIP",
    title: "تنمية بشرية",
    url: "https://api.airtable.com/v0/app6VIh7RghR5RdS3/%D8%AA%D9%86%D9%85%D9%8A%D8%A9%20%D8%A8%D8%B4%D8%B1%D9%8A%D8%A9",
    name: "Name",
    img: "image",
    link: "url",
    download: "download",
    nu: "nu",
  },
  {
    id: "recDukgxcT2ujvZZ0",
    title: "قانون وسياسة",
    url: "https://api.airtable.com/v0/app6VIh7RghR5RdS3/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%88%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9",
    name: "Name",
    img: "image",
    link: "url",
    download: "download",
    nu: "nu",
  },
  {
    id: "recTrj1IePZzHoQ1r",
    title: "أدب الطفل",
    url: "https://api.airtable.com/v0/app6VIh7RghR5RdS3/%D8%A7%D8%AF%D8%A8%20%D8%A7%D9%84%D8%B7%D9%81%D9%84",
    name: "Name",
    img: "image",
    link: "url",
    download: "download",
    nu: "nu",
  },
];
let offset;
let url;
const moreButton = document.querySelector("#moreButton");
moreButton.addEventListener("click", getBooksData);
async function getBooksData() {
  document.querySelector('#pageCategory').innerHTML += `<div id="gif"><img src="gif.gif" style="max-height: unset;max-width: unset;"/></div>`;
  setTimeout(function () {
    $('#pageCategory').children('#gif').hide();
  }, 2000)
  if (document.querySelector('#pageCategory .row')) {
    let selectedOneCategory = categories.filter((cate) => {
      return cate.id == location.hash.replace("#", "");
    });
    storageCategory.saveSelected(selectedOneCategory[0]);
    let selectedCategory = storageCategory.fetchSelected();

    if (offset) {
      url = selectedCategory.url + `?offset=${offset}`;
    } else {
      url = selectedCategory.url;
    }
    return await fetch(url, {
      headers: {
        Authorization: "Bearer keykb7rVGd1latZ9a",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        offset = data.offset;
        storageCategory.save(data.records);
        document.getElementById("cateTitle").textContent =
          selectedCategory.title;
        let pageCategory = document.querySelector('#pageCategory .row');
        for (let category of data.records) {
          if (
            category.fields[selectedCategory["name"]] &&
            category.fields[selectedCategory["img"]]
          )
            pageCategory.appendChild(createBookContent(category));
        }
      });
  }
}
getBooksData();

function createBookContent(book) {
  let selectedCategory = storageCategory.fetchSelected();
  let div = document.createElement("div");
  div.classList = "card rounded-0 col-sm-6 col-md-4 col-lg-3 text-center";
  div.innerHTML += `
      <div class="d-flex flex-column justify-content-center align-items-center p-3">
        <figure>
          <img style="width:118px; height: 179px" class="img-fluid img-thumbnail shadow" id="book-img" src="${book.fields[selectedCategory.img]
    }" class="card-img" alt="Not Found" onerror=this.src="images/ccc.png">
        </figure>
          <div class="card-body">
            <h5 class="card-title mb-4">${book.fields[
      selectedCategory.name
    ].replace(
      /[.pdf.rar % zip zi doc $ @ # * ( ) . , ; : " ' - | '_']/g,
      " "
    ).length > 20 ? book.fields[
      selectedCategory.name
    ].replace(
      /[.pdf.rar % zip zi doc $ @ # * ( ) . , ; : " ' - | '_']/g,
      " "
    ).substr(0, 20) + '...' : book.fields[
      selectedCategory.name
    ].replace(
      /[.pdf.rar % zip zi doc $ @ # * ( ) . , ; : " ' - | '_']/g,
      " "
    )}</h5>

              <a class="btn btn-sm text-success" href="book.html?name=${book.fields[
      selectedCategory.name
    ].replace(
      /[.pdf.rar % zip zi doc $ @ # * ( ) . , ; : " ' - | '_']/g,"-" )}&id=#${book.id}">أقرا الكتاب</a>

        </div>
      </div>
  `;
  return div;
}

window.addEventListener("click", (e) => {
  if (e.target.matches(".dropdown-item")) {
    getBooksData();
  }
});

// Category page
window.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('#pageCategory .row')) {
    let pageCategory = document.querySelector("#pageCategory .row");
    let search = document.querySelector("#searchCategory input");
    let categories = storageCategory.fetch();
    let selectedCategory = storageCategory.fetchSelected();

    search.addEventListener("keyup", () => {
      pageCategory.innerHTML = "";
      if (search.value === "") {
        for (let category of categories) {
          pageCategory.append(createBookContent(category));
        }
      } else {
        moreButton.style.visibility = "hidden";
        let categoryFilters = [];
        async function getData() {
          return await fetch(
            `${url}?filterByFormula=SEARCH("${search.value}",{name})`,
            {
              headers: {
                Authorization: "Bearer keykb7rVGd1latZ9a",
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data.records);
              categoryFilters = data.records;
              if (categoryFilters.length) {
                for (let category of categoryFilters) {
                  pageCategory.append(createBookContent(category));
                }
              } else {
                pageCategory.innerHTML = `
            <div class="my-3 text-center">
              <p> لا يوجد هذا الكتاب يمكنك طلبه عبر الاميل</p>
              <a href="mailto:khiallibrary.com@gmail.com"
              ><i class="fa fa-at btn btn-sm btn-danger mx-1"></i> khiallibrary.com@gmail.com
            </a>
            </div>
          `;
              }
            });
        }
        getData();
      }
    });
  }
});
