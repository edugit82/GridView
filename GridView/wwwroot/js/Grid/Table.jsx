import { HeadLine } from "/js/Grid/HeadLine.jsx"
import { Line } from "/js/Grid/Line.jsx"

export class Table extends React.Component {
    constructor() {
        super()

        $("table").ready(() =>
        {
            let cont = $("table > tbody > tr").length;
            $("table > tfoot > tr > td:first").text("Linhas: " + cont);
        });
    }

    render() {
        return (
            <table className="table table-striped table-dark">
                <thead>
                    <HeadLine />
                </thead>
                <tbody>
                    <Line Colunas={[1, "Mark", "Otto", "@mdo"]} />
                    <Line Colunas={[2, "Jacod", "Thornton", "@fat"]} />
                    <Line Colunas={[3, "Larry", "The Bird", "@Twitter"]} />
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4"></td>
                    </tr>
                </tfoot>
            </table>
        )
    }
}

let Executa = function () {
    ReactDOM.render(<Table />, document.getElementById("corpo"))
}

export { Executa }