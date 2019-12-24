window.onload = function(){
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=b3c1548f2cb44d8495a2a63d3ff9dad5';
let container = document.querySelector(".container");

function createNode(element){
    return document.createElement(element);
}

function append(parent, node){
    return parent.appendChild(node);
}

fetch(url)
    .then(function(response) {
        // console.log(response);
        return response.json();
    })
    .then(function(response){
        for(var i = 0; i < response.articles.length; i++){

            var data = response.articles[i];
            
            let p = createNode('p'),
            img = createNode('img'),
            div_row= createNode('div'),
            div_col= createNode('div'),
            div_card= createNode('div'),
            div_card_image= createNode('div'),
            span_card_title= createNode('span'),
            div_card_content= createNode('div'),
            div_card_action= createNode('div'),
            a = createNode('a');

            div_row.className = 'row';
            div_col.className = 'col s12 m7';
            div_card.className = 'card';
            div_card_image.className = 'card-image';
            div_card_content.className = 'card-content';
            div_card_action.className = 'card-action';
            span_card_title.className = 'card-title';
            if(data.urlToImage === null) img.src = "https://images.daznservices.com/di/library/GOAL/36/ed/dybala-inter-juventus-serie-a_1id212ml7vo5c15gpk330ei20y.jpg?t=-1501234675&quality=100";
            else img.src = data.urlToImage; 
            p.innerText = data.title;
            a.href = data.url;
            a.innerText = "Link";

            append(div_card_content, p);
            append(div_card_image, img);
            append(div_card_image, span_card_title);
            append(div_card_action, a);
            append(div_card, div_card_image);
            append(div_card, div_card_content);
            append(div_card, div_card_action);
            append(div_col, div_card );
            append(div_row, div_col);
            append(container, div_row);
        }

    })

}

