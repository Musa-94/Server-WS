import Model from './Model';

class Controller {
    constructor() {
        this._model = new Model();
    }

    getLines = () => this._model.getLines();
    setLines = lines => this._model.setLines(lines);
    // clearLines = () => this._model.clearLines();
}

export default Controller;