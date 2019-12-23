class Model {
    constructor() {
        this._lines = [1,2,3];
    }

    setLines = lines => {
        this._lines.push(lines);
    }

    clearLines = () => {
        this._lines = [];
    }

    getLines = () => {
        return [...this._lines];
    }
}

export default Model;