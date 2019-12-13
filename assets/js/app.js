//creando una variable global
const listaTweets=document.getElementById('lista-tweets')


//function evenListener

evenListener()

function evenListener(){
    document.getElementById('formulario').addEventListener('submit', agregarTweet)

    //borrar tweet
    listaTweets.addEventListener('click', borrarTweet)

    //contenigo cargado
    document.addEventListener('DOMContentLoaded', localStorageListo)

}



//Agregando funciones
function agregarTweet(e){
    e.preventDefault()
    const tweet=document.querySelector('#tweet').value

    //crear botom de eliminar
    const botonBorrar=document.createElement('a')
    botonBorrar.classList='borrar-tweet'
    botonBorrar.innerText='X'
    //creando elemento li
    const li=document.createElement('li')
    li.innerText=tweet
    li.appendChild(botonBorrar)
    listaTweets.appendChild(li)
    console.log(tweet);
    

    //añadir al localStora
    agregarTweetLocalStorage(tweet)
    
}

//eliminando el tweet del dom
function borrarTweet(e){
    e.preventDefault()
    if(e.target.className === 'borrar-tweet'){
        console.log(e.target.parentElement.remove());
        borrarTweetLocalstorage(e.target.parentElement.innerText)
        
        
        
        
    }
}

//mostrar datos del localStora en la lista
function localStorageListo(){
    let tweets

    tweets=obtenerTweetsLocalStorage()
    tweets.forEach(function(tweet){
         //crear botom de eliminar
        const botonBorrar=document.createElement('a')
        botonBorrar.classList='borrar-tweet'
        botonBorrar.innerText='X'
        //creando elemento li
        const li=document.createElement('li')
        li.innerText=tweet
        li.appendChild(botonBorrar)
        listaTweets.appendChild(li)
        console.log(tweet);
    });
}

//agregar tweet a localStora
function agregarTweetLocalStorage(tweet){
    let tweets

    tweets=obtenerTweetsLocalStorage()
    tweets.push(tweet)
    localStorage.setItem('tweets', JSON.stringify(tweets))

   
}

//se encarga de comprobar que haya elementos en localStorage return arreglo
function obtenerTweetsLocalStorage(){
    let tweets
    if(localStorage.getItem('tweets') === null){
        tweets=[]
    }else{
        tweets=JSON.parse(localStorage.getItem('tweets'))
        
    }
    return tweets
}

//eliminar Tweet de local storage
function borrarTweetLocalstorage(tweet) {

    let tweets, tweetBorrar;
    // Elimina la X del tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index) {
         if(tweetBorrar === tweet) {
              tweets.splice(index, 1);
         }
    }) ;

    localStorage.setItem('tweets', JSON.stringify(tweets) );
    
}