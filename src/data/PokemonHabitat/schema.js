module.exports = class {
    constructor(props) {
        this.name = props.name
        this.description = props.description
        this.image = `${process.env.SITE_URL}/upload/pokemon-habitat/${props.name}.gif`
    }
}