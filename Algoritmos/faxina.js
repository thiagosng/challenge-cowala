function faxina(obj) {
    for (var prop in obj) {
        if(obj[prop] === null) {
            delete obj[prop];
        }
    }
    return obj;
  }
  
  console.log(faxina({
    "fizz": "buzz",
    "foo": null,
    "bar": 42,
    "baz": "qux",
    "quux": null,
    "corge": "grault",
    "garply": "waldo",
    "fred": "plugh",
    "xyzzy": "thud",
    "thud": null,
  }))