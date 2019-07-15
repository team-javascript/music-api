export default function(query) {
  return new Html(query);
}

class Html {
  constructor(query) {
    if (typeof query !== "string") throw new Error("Argument must be a string");

    const selection = document.querySelectorAll(query);

    if (selection.length === 0) {
      if (this._isClassQuery(query) || this._isIdQuery(query))
        throw new Error("Element must be a valid HTML tag");
      this.element = document.createElement(query);
    } else if (selection.length === 1) {
      this.element = selection[0];
    } else {
      this.element = selection;
    }
  }

  _isClassQuery(query) {
    return query.startsWith(".");
  }

  _isIdQuery(query) {
    return query.startsWith("#");
  }
}
