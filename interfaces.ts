interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
 }
 let myIceCream : IceCream = {
     flavor: 'vanila',
     scoops: 5
 }
 // console.log(myIceCream)
 
 
 let myIceCream2: Sundae = {
     flavor: 'vanilla',
     scoops: 2,
     sauce: 'caramel',
     nuts: true
 }
 // console.log(myIceCream2)
 
 interface Sundae extends IceCream {
     sauce: 'chocolate' | 'caramel' | 'strawberry';
     nuts?: boolean;
     whippedCream?: boolean;
     instructions?: string;
 }
 function howManyScoops (dessert: Sundae){
       if (dessert.scoops >= 4) {
       return dessert.scoops + ' is too many scoops!';
    } else {
       return 'Your order will be ready soon!';
    }
 }
 console.log(howManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));


//  Создание индексируемых типов

interface IceCreamArray {
    [index: number]: string;
}

let myIceCream3: IceCreamArray;
myIceCream3 = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream3[0];
console.log(myStr);

// Описать API JavaScript с помощью интерфейса.


const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();