const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },

  
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
/*Image*/
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headerImg=document.getElementById("cta-img");
headerImg.setAttribute('src',siteContent["cta"]["img-src"]);

let middleImg=document.getElementById("middle-img");
middleImg.setAttribute('src',siteContent["main-content"]["middle-img-src"]);

let ctaText = document.querySelector("h1");
ctaText.textContent = siteContent["cta"]["h1"];

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

/*Navigation*/
let navItem=document.querySelectorAll("nav a");
navItem[0].textContent=siteContent["nav"]["nav-item-1"];
navItem[1].textContent=siteContent["nav"]["nav-item-2"];
navItem[2].textContent=siteContent["nav"]["nav-item-3"];
navItem[3].textContent=siteContent["nav"]["nav-item-4"];
navItem[4].textContent=siteContent["nav"]["nav-item-5"];
navItem[5].textContent=siteContent["nav"]["nav-item-6"];

/*Color change for Navigation*/
navItem.forEach((arrItem)=>arrItem.style.color='green');

/*Addition of two new Navigation-item*/
const newNav=document.querySelector("nav");

const newnavItem1 = document.createElement("a");
newnavItem1.textContent = "Home";
newNav.prepend(newnavItem1);
newnavItem1.style.color='green';

const newnavItem2 = document.createElement("a");
newnavItem2.textContent = "Sign-in";
newNav.append(newnavItem2);
newnavItem2.style.color='green';

/*Header*/
 let mainContentHeader = document.querySelectorAll(".main-content h4");
 mainContentHeader[0].textContent = siteContent["main-content"]["features-h4"];
 mainContentHeader[1].textContent = siteContent["main-content"]["about-h4"];
 mainContentHeader[2].textContent = siteContent["main-content"]["services-h4"];
 mainContentHeader[3].textContent = siteContent["main-content"]["product-h4"];
 mainContentHeader[4].textContent = siteContent["main-content"]["vision-h4"];
 
 /*Text*/
 let mainContent = document.querySelectorAll(".main-content p");
 mainContent[0].textContent = siteContent["main-content"]["features-content"];
 mainContent[1].textContent = siteContent["main-content"]["about-content"];
 mainContent[2].textContent = siteContent["main-content"]["services-content"];
 mainContent[3].textContent = siteContent["main-content"]["product-content"];
 mainContent[4].textContent = siteContent["main-content"]["vision-content"];

/*Contact*/
let contact = document.querySelector(".contact h4");
contact.textContent=siteContent["contact"]["contact-h4"];

 let contactBody = document.querySelectorAll(".contact p");
 contactBody[0].textContent=siteContent["contact"]["address"];
 contactBody[1].textContent=siteContent["contact"]["phone"];
 contactBody[2].textContent=siteContent["contact"]["email"];

 
/*Footer*/
const newContent = document.createElement("footer");
newContent.textContent = "Copyright Great Idea! 2018";
const parentElement = document.querySelector('body');
parentElement.appendChild(newContent);