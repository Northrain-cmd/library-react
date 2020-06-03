(this["webpackJsonplibrary-react"]=this["webpackJsonplibrary-react"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),n=a(7),i=a.n(n),l=a(5),s=a(1),c=a(2),u=a(4),m=a(3);a(13);function b(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"edit-form",onSubmit:function(t){t.preventDefault(),e.editFormSubmit(t)}},r.a.createElement("input",{type:"text",name:"title",required:!0,defaultValue:e.bookInfo.title}),r.a.createElement("input",{type:"text",name:"author",required:!0,defaultValue:e.bookInfo.author}),r.a.createElement("input",{type:"text",name:"pages",minLength:"1",maxLength:"5",required:!0,defaultValue:e.bookInfo.pages}),r.a.createElement("input",{type:"submit",value:"Save"})))}function d(e){return r.a.createElement("div",{className:"book-info"},r.a.createElement("button",{id:"edit-button",onClick:e.editBook},"Edit"),e.editScreen&&r.a.createElement(b,{editFormSubmit:e.editFormSubmit,bookInfo:e.bookInfo}),r.a.createElement("h3",null,e.bookInfo.title),r.a.createElement("h3",null,"by ",e.bookInfo.author),r.a.createElement("h3",null,"Pages:",e.bookInfo.pages),r.a.createElement("div",{className:"delete-div"},r.a.createElement("i",{onClick:e.deleteBook},"x")))}var g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).showInfo=function(){o.setState({showInfo:!o.state.showInfo})},o.editScreen=function(){o.setState({editScreen:!o.state.editScreen})},o.editFormSubmit=function(e){o.editScreen(),o.props.editFormSubmit(e)},o.state={showInfo:!1,editScreen:!1},o}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.bookInfo.isRead;return r.a.createElement("div",{className:"book"},r.a.createElement("div",{className:"book-cover",style:{backgroundImage:"url(".concat(this.props.bookInfo.cover,")")}},this.state.showInfo&&r.a.createElement(d,{editFormSubmit:this.editFormSubmit,editScreen:this.state.editScreen,editBook:this.editScreen,deleteBook:this.props.deleteBook,bookInfo:this.props.bookInfo})),r.a.createElement("div",{className:"button-group"},r.a.createElement("button",{onClick:this.showInfo,id:"info-button"},"i"),r.a.createElement("button",{onClick:this.props.changeReadStatus,id:"read-button",style:{backgroundColor:e?"darkorange":"darkgrey"}},e?"Read":"Not Read")))}}]),a}(r.a.Component);function f(e){var t=this,a=e.library.map((function(a,o){return r.a.createElement(g,{editFormSubmit:e.editFormSubmit.bind(t,o),bookInfo:a,key:o,deleteBook:e.deleteBook.bind(t,o),changeReadStatus:e.changeReadStatus.bind(t,o)})}));return r.a.createElement("div",{className:"container"},a)}var h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).inputHandler=function(e){o.setState({value:e.target.value})},o.state={value:""},o.baseState=o.state,o.val=o.state.value,o}return Object(c.a)(a,[{key:"submitForm",value:function(e){e.preventDefault(),this.props.addBook(this.state.value),this.setState({value:this.baseState.value})}},{key:"render",value:function(){return r.a.createElement("form",{id:"new-book-form",onSubmit:this.submitForm.bind(this)},r.a.createElement("label",{htmlFor:"newBook"},this.props.error," "),r.a.createElement("div",{className:"new-book-input"},r.a.createElement("input",{id:"newBook",type:"text",name:"newBook",value:this.state.value,onChange:this.inputHandler,placeholder:"Enter book's full title"}),r.a.createElement("input",{type:"submit",name:"newBook",value:"Add"})))}}]),a}(r.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).editFormSubmit=function(e,t){var a=o.state.library.map((function(a,o){return e===o&&(a.title=t.target.title.value,a.author=t.target.author.value,a.pages=t.target.pages.value),a}));localStorage.setItem("library",JSON.stringify(a)),o.setState({library:Object(l.a)(JSON.parse(localStorage.getItem("library")))})},o.addBook=function(e){var t;e.length>=3&&fetch("https://www.googleapis.com/books/v1/volumes?&fields=items(volumeInfo(title,authors,pageCount,imageLinks(thumbnail)))&q=".concat(e,"&maxResults=1&key=").concat(o.googleBooks)).then((function(e){e.json().then((function(e){t=e.items[0].volumeInfo,o.state.library.find((function(e){return e.title===t.title}))?(o.setState({error:"You already added this book"}),setTimeout((function(){o.setState({error:""})}),3e3)):(localStorage.setItem("library",JSON.stringify([{isRead:!1,title:t.title,author:t.authors?t.authors.toString():"unknown",pages:t.pageCount?t.pageCount:"unknown",cover:t.imageLinks.thumbnail}].concat(Object(l.a)(o.state.library)))),o.setState({library:JSON.parse(localStorage.getItem("library")),error:""}))}))})).catch((function(e){console.log(e)}))},o.deleteBook=function(e){console.log(e),localStorage.setItem("library",JSON.stringify(Object(l.a)(o.state.library.filter((function(t,a){return e!==a}))))),o.setState({library:JSON.parse(localStorage.getItem("library"))})},o.changeReadStatus=function(e){var t=o.state.library.map((function(t,a){return e===a&&(t.isRead=!t.isRead),t}));localStorage.setItem("library",JSON.stringify(t)),o.setState({library:Object(l.a)(JSON.parse(localStorage.getItem("library")).sort((function(e,t){return e.isRead-t.isRead})))})},o.googleBooks="AIzaSyAESFTdUf9THRX481gN1QQVo-kekK_471k",console.log(JSON.parse(localStorage.getItem("library"))),o.state={library:localStorage.getItem("library")?JSON.parse(localStorage.getItem("library")).sort((function(e,t){return e.isRead-t.isRead})):[{isRead:!1,title:"Learning React",author:"Alex Banks, Eve Porcello",pages:"350",cover:"http://books.google.com/books/content?id=ycTADgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},{isRead:!0,title:"Vue.js Programming by Example",author:"Agus Kurniawan",pages:"200",cover:"http://books.google.com/books/content?id=JDw8DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}],error:""},localStorage.setItem("library",JSON.stringify(o.state.library)),console.log(JSON.parse(localStorage.getItem("library"))),o}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Library"),r.a.createElement(h,{error:this.state.error,addBook:this.addBook}),r.a.createElement(f,{editFormSubmit:this.editFormSubmit,changeReadStatus:this.changeReadStatus,library:this.state.library,deleteBook:this.deleteBook}))}}]),a}(r.a.Component);i.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9d6f473a.chunk.js.map