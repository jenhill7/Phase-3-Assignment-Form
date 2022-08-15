import { yourcomments } from ".comment";
import ".style.css";

document.querySelector(#app).innerHTML =`
<div>
<section>
<h1>Enter Comment</h1>
</section>
<section>
<form>
<div class="formDiv">
<label for="name">Name</label>
<br>
<input type="text" id="name" name="name" autocomplete="on" required />
</div>
<div class="formDiv">
<label for="email">Email</label>
<br>
<input type="text" id="email" email="email" autocomplete="on" required />
</div>
<div class="formDiv">
<label for="yourcomment">Your Comments</label>
<br>
<textarea name="yourcomments" id="yourcomments" cols="30" rows="5";
</div>
<p><span><input type="checkbox" id="checkbox" required /><span> Agree?</p>
<span><label id="agree">Agree to share info</label>
<br><br>
<input value="submit" type="submit"/>
<div id="results-field">
<custom-comment 
name="Jen" 
email="hillj1015@gmail.com"
yourcomments="thank you"
id="yourcomments-component"></custom-comment>
</div>
</form>
</section>
</div>

<template id="template>
<style>
#comment-output{
    font-weight: bold;
    color: #FFFFda;
    width: 50vw;
    height: 25vh;
    justify-conent: center;
    align-items: center;
    text-align: center;
    margin: 1rem;
    align-items: center;
    border-style: solid;
    border-radius: 1rem;
    border-width: 5px;
    border-color: black;
    backgroung-image: linear-gradient(135def, #00002a, #FFFF1);
}

#top {
    background: black;
    border-radius: .5rem .5rem 0rem 0rem;
    height: 10vh;
    width: 100%;
    padding-top: 10px;
}
#little {
    text-size: 10px;
    align-items: bottom;
}
</style>
<div id="comment-output">
<div id = "top">
<h1><span> id="username"</span> Comment</h1>
</div>
<div id="info">
<p id="users-comment"></p>
<p id="little'>By: <span><p id="users-email"></p></span></p>
</div>
</div>
</template>
`;

document.querySelector("form").addEventListener("submit", (ev) => {
    ev.preventDefault();
    createYourComments();
});