const resultcontainer = document.getElementById("resultcontainer");
let blogs;

const loadPage = (page) => {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {

        if (xhttp.readyState === 4) {
            document.getElementById("root").innerHTML = xhttp.responseText;
        }
    }

    xhttp.open('GET', page, true);
    xhttp.send()
}

let baseurl = "http://localhost:4000"
let blogdata = [];
// second function
const fetchdatafromapi = async () => {
    try {

        const response = await fetch(`${baseurl}/api/blog/getAll`);
        await response.json().then(data => {
            console.log(...data?.data);
            blogs = data?.data;
            builtdataelements(data);
            blockcontent(0);
        })

        console.log(blogdata)

    } catch (err) {
        console.log("error:", err.message);

    }


}

// first function 
window.onload = () => {
    loadPage('pages/home.html')
    fetchdatafromapi();

}

const builtdataelements = (data) => {
    const container = document.getElementById("resultcontainer")
    container.innerHTML = "";
    console.log(data);
    data?.data.forEach((item, index) => {
        container.innerHTML += `  <div onclick ="blockcontent(${index})"><p> Title:  ${item.title}<p> <p>  Discription: ${item.description}<p><img src="${item.imageURL}" alt="Image"> </div>`;




    });


}
// fourth 
const blockcontent = (i) => {
    const blog = blogs[i]
    const blockcontentcontainer = document.getElementById("blockcontentcontainer");
    blockcontentcontainer.innerHTML = "";
    console.log("blog", blog);
    blockcontentcontainer.innerHTML = `
        <div class="">
        
        <p class =" text-2xl font-bold ">${blog.title}</p>
        <img src="${blog.imageURL}" alt="${blog.title}" class =" w-full h-96 object-cover">
        </div>`;
}

