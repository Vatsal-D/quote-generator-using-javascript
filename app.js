let btn=document.querySelector("#nextquote");
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
    quote: `"Learn from the mistakes of others. 
    You can't live long enough to make them all yourself."`,
    person:`Eleaner Roosevelt`
}, {
    quote: `"The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become."`,
    person:`W.E.B. Du Bois`
}, {
    quote: `"Once you choose hope, anything’s possible."`,
    person:`Christopher Reeve`
}, {
    quote: `"Be the change that you wish to see in the world."`,
    person:`Mahatma Gandhi`
}, {
    quote: `"I don't believe in taking right decisions.
     I take decisions and then make them right."`,
    person:`Ratan Tata`
}, {
    quote: `"Our doubts are traitors and make 
    us lose the good we oft might win by fearing to attempt"`,
    person:`William Shakespeare`
}, {
    quote: `"The time is always right to do what is right."`,
    person:`Martin Luther king`
},{
    quote: `"The lack of money is the root of all evil."`,
    person:`Mark Twain`
}, {
    quote: `"Innovation distinguishes between a leader and a follower"`,
    person:`Steve Jobs`
}, {
    quote: `"Leadership is the capacity to translate vision into reality"`,
    person:`Warren Bennis`
},];
btn.addEventListener('click', function(){
    let random=Math.floor(Math.random() * quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;


})