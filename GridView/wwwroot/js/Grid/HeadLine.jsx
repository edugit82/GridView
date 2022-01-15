import {THead} from "/js/Genericos/THead.jsx"

export class HeadLine extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <tr>
                <THead Value="#" />
                <THead Value="First" />
                <THead Value="Last" />
                <THead Value="Handle" />
            </tr>
        )
    }
}