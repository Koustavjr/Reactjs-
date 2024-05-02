// returning an 'a' tag,how react sees the element after compilation. It tries to create a tree like structure
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'click me to visit google',
}

const mainContainer=document.querySelector('#root');

// first parameter what to ineject, 2nd one where to inject

function customRender(reactElement,mainContainer)
{
/*    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href',reactElement.href);
    domElement.setAttribute('target',reactElement.target);
    
    mainContainer.appendChild(domElement);*/

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
       if(prop==='children') continue;

       domElement.setAttribute(prop,reactElement.props[prop]);
       domElement.setAttribute(prop,reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement);
}



customRender(reactElement,mainContainer)