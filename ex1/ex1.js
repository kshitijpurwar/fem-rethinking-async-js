function fakeAjax(url, cb) {
  var fake_responses = {
    file1: "The first text",
    file2: "The middle text",
    file3: "The third text",
    file4: "The last text"
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

// **************************************
// The old-n-busted callback way

const files = {};
const seq = ["file1", "file2", "file3", "file4"];

function getFile(file) {
  fakeAjax(file, function(text) {
    // Here we go

    files[file] = text;
    printNow(seq);
  });
}

function printNow() {
  const first = seq[0];
  const last = seq[seq.length - 1];

  if (files[first]) {
    output(files[first]);
    files[first] = false;
  }

  if (files[last] === false) output("Complete!");

  for (let i = 1; i < seq.length; i++) {
    // console.log(files, files[seq[i - 1]], files[seq[i]], seq[i]);
    const current = seq[i];
    if (files[seq[i - 1]] === false && files[current]) {
      output(files[current]);
      files[current] = false;
    }

    // Added later after solution to prevent extra loops
    else {
      return;
    }
    console.log(i);
  }
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
getFile("file4");
