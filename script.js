let id;
let arr = []
async function loadData(){
    try{
        let input = document.querySelector("#input").value;
        let dataRow = await fetch(`https://swapi.dev/api/people/?search=${input}`);
        let data = await dataRow.json();
        data =  data.results;
        console.log(data);
        dataShow(data)
    }
    catch(err){
        console.log(error);
    }
}


function dataShow(data){
    document.querySelector(".results").innerHTML = ""
    data.forEach(function(ele){
        let div = document.createElement("div");
        div.setAttribute("class","list")
        div.addEventListener("click",function(){
            details(ele)
        })
        let p = document.createElement("p");
        p.innerText = ele.name;
        div.append(p);
        document.querySelector(".results").append(div);
    });
}

function details(ele){
    arr.push(ele);
    localStorage.setItem("details",JSON.stringify(arr));
    window.location.href = "./detail.html"
}

function debouncing(func,delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func()
    },delay)
}



