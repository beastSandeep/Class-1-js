// We have a global object called window inside javascript that provide by browsers
// window object depends on where javascript is running
console.log(window);

// all functions are stored in window objects as method
function aaa() {
  console.log("aaa");
}

// so we can run a function like this also
window.aaa();
aaa();
