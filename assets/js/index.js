var data=''
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            data = JSON.parse(this.responseText)
            let container = document.getElementsByClassName("container")[0]
            for(let i=0;i<20;i++){
            let ele = document.createElement('section')
            let comment_id = data.data[i].id
            let post_id = data.data[i].post_id
            let name = data.data[i].name
            let comment = data.data[i].body
            let email = data.data[i].email
            let html = `<div class="post"><span><a href="https://husain-ujjaini.github.io/API-project-part2/index.html#post${post_id}">post #${post_id}</a></span></div>
                        <div class="comments"><p>${comment}</p><br>
                        <span>commented by ${name} #${comment_id} <br> 
                        <font color="black">email: </font>${email}</span></div>`
            ele.innerHTML = html
            container.appendChild(ele)
        }
       }
    };
    let d = "Javascript"
    xhttp.open("GET", `https://gorest.co.in/public/v1/comments`, true);
    xhttp.send();