function fakeAjax(url, cb) {
  var fake_responses = {
    file1: "The first text",
    file2: "The middle text",
    file3: "The last text"
  };
  var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

  console.log("Requesting: " + url);

  setTimeout(function() {
    cb(fake_responses[url]);
  }, randomDelay);
}

function output(text) {
  console.log(text);
}

// thunk, lazy or active
// **************************************

// Active Thunk
function getFile(file) {
  // what do we do here?
  let response, fn;
  fakeAjax(file, text => {
    if (fn) fn(text);
    else response = text;
  });

  return cb => {
    if (response) cb(response);
    else fn = cb;
  };
}

// request all files at once in "parallel"
// ???

let printFile1Thunk = getFile("file1");
let printFile2Thunk = getFile("file2");
let printFile3Thunk = getFile("file3");

printFile1Thunk(t1 => {
  output(t1);
  printFile2Thunk(t2 => {
    output(t2);
    printFile3Thunk(t3 => {
      output(t3);
      output("Complete!");
    });
  });
});
