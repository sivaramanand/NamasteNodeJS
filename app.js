// Synchronous blocking sleep function
function sleep(milliseconds) {
  const start = Date.now();
  while (Date.now() - start < milliseconds) {
    // Blocking loop - not recommended for real applications
  }
}

function prepare(item) {
  if (item === "coke") sleep(0);
  else if (item === "noodles") sleep(5000);
  else if (item === "pizza") sleep(10000);
  console.log(item + " is ready");
}

prepare("coke");
prepare("noodles");
prepare("pizza");
prepare("coke");
prepare("noodles");