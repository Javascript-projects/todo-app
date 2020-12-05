document.addEventListener("click", function(e){
    if(e.target.classList.contains("edit-me")){
        let userInput =  prompt("Enter your Desired new Text")
        axios.post('/update-item', {text: userInput}).then(function(){
            
        }).catch()
    }
})