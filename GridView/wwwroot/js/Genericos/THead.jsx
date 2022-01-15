export class THead extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (<th className="thclass" scope="col">{this.props.Value}</th>)
    }
}