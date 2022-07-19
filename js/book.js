
window.addEventListener('DOMContentLoaded', () => {
  let booksData = storageCategory.fetch();
  let selectedBook = booksData.filter(book => book.id === location.hash.replace('#', ''))
  console.log(selectedBook)
  let selectedCategory = storageCategory.fetchSelected()
  console.log(selectedCategory)

  var a = 1;

  document.getElementById('bookSingular').innerHTML = `
 
    <div class="d-flex">
    <figure>
      <img src="${selectedBook[0].fields[selectedCategory.img]}" class="card-img" alt="Not Found" onerror=this.src="images/ccc.png">
    </figure>
      <div class="card-body">
        <h5 class="card-title mb-4">${selectedBook[0].fields[selectedCategory.name].replace((/[.pdf.rar % zip zi doc $ @ # * ( ) . , ; : " ' - | '_']/g), ' ')}</h5>

        <div class="d-flex align-items-center">

     <button class="ecraa" onclick={document.getElementById("iframe").style.display="inline"}>أقرا الكتاب</button>


          <a class="btn btn-sm btn-success mx-1" href="${selectedBook[0].fields[selectedCategory.download]}" target="_blank" download="download" >تحميل الكتاب</a>



        </div>
    </div>
  </div>
<iframe id="iframe"  src="https://drive.google.com/file/d/${selectedBook[0].fields[selectedCategory.nu]}/preview?usp=embed_googleplus"
    style=" display:none; top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;"></iframe>

 
    `
   
})
    
