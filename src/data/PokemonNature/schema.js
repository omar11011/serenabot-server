module.exports = class {
    constructor(props) {
        this.name = props.name
        this.effects = props.effects || {}
    }
}