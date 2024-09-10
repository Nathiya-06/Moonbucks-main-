const fileiput = document.getElementById("fileiput");
const blogtitle = document.getElementById("blogtitle");
const description = document.getElementById("description");
const content = document.getElementById("content");
const imagecontainer = document.getElementById("imagecontainer");
let selectedfile = null;
let baseurl = "http://localhost:4000"

const gotohome = () => {
    window.location.replace("http://127.0.0.1:5500/client/public/index.html");

}

const gobacktoclickafile = () => {
    selectedfile = null;
    imagecontainer.innerHTML = "";
    imagecontainer.innerHTML = `
    
        <label class="w-full h-full flex items-center justify-center">
            <div class="w-full h-full flex items-center justify-center" >
                <p>Click to upload</p>
            </div>
            <input type="file" accept="image/*" class="w-0 h-0" id="fileiput"  onchange="loadimagefromfile(event)">
        </label>
     
    `
}

const loadimagefromfile = (e) => {
    console.log("file changed :", e.target.files[0])
    const file = e.target.files[0];
    if (file) {

        const reader = new FileReader();
        reader.onload = (event) => {
            console.log(event.target.result);
            selectedfile = event.target.result;
            imagecontainer.innerHTML = "";
            imagecontainer.innerHTML = `
            <div  onclick ="gobacktoclickafile()" class="imageBox">
            <div class="w-8 h-8 rounded-md bg-red-500 flex items-center justify-center absolute top-4 right-4">
            <i class='bx bxs-trash'></i></div>
            <img class="w-full h-full object-cover" src="${event.target.result}" alt=""
            >
            </div>
            `;

        }
        reader.readAsDataURL(file);
    } else {
        console.log("please select a file")
    }


};

const savethedata = async () => {
    const _doc = {
        title: blogtitle.value,
        description: description.value,
        content: content.value,
        imageURL: selectedfile,
    };
    if (_doc) {
        try {

            const response = await fetch(`${baseurl}/api/blog/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(_doc),
            });

            const data = await response.json();
            alert('data saved');

        } catch (err) {

            console.log(`error : ${err.message}`);

        }
    }
};

const clearthedata = () => {
    blogtitle.value = "";
    description.value = "";
    content.value = "";
    selectedfile = null;
    gobacktoclickafile();

}

window.onscroll = function () {
    scrollFunction()

    function scrollFunction() {
        if (document.body.scrollTop > 18 || document.documentElement.scrollTop > 18) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
};