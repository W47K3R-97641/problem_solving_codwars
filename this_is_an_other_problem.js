function NamedOne(first, last) {
  // -- SHOULD be changed --
  this.firstName = first;
  this.lastName = last;
  this.fullName = this.firstName + " " + this.lastName;
  Object.defineProperties(this, {
    fullName: {
      set(val) {
        if (val.indexOf(" ") > 0) {
          this.firstName = val.slice(0, val.indexOf(" ")).trim();
          this.lastName = val.slice(val.indexOf(" ")).trim();
        }
      },
      get() {
        return this.firstName + " " + this.lastName;
      },
    },
  });
}

// Link Challange: https://www.codewars.com/kata/547f1a8d4a437abdf800055c
