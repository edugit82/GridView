import { FirstCol } from "/js/Grid/FirstCol.jsx"
import { Col } from "/js/Genericos/Col.jsx"

export class Line extends React.Component {
    constructor() {
        super()
    }

    render() {

        let colunas = this.props.Colunas;
        let cols = [];

        for (var i = 0; i < colunas.length; i++) {

            if (i == 0) {
                cols.push(<FirstCol key={i} Value={colunas[i]} />);
            }
            else
            {
                cols.push(<Col key={i} Value={colunas[i]} />);
            }
        }

        return (<tr>
            {cols}
        </tr>)
    }
}