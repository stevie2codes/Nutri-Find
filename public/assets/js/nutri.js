$(document).ready(function(){  
    const appID = "18861f2e";
    const appKey = "68efa84e310a4be31fde38641542ff28";
  
    $(".add").click(function(){
        let input = $("#userInput").val();
        const url = `https://api.edamam.com/search?q=${input}&app_id=${appID}&app_key=${appKey}&from=0&to=3`;
    
        console.log(input);
        $.ajax({
            url: url,
            type: "GET",
               
        }).then(data => {
            let items = data.hits;
          console.log(items);
           items.forEach(element => {
            let img = $("img").attr("src",element.recipe.image);
            let label = $("<li>").addClass("label-name").text(`Recipe name: ${element.recipe.label}`).append(img);
            $(".list").append(label);
           });            
        });
    });
});