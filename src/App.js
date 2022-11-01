import {useState} from "react";

function App() {
    const [gender, setGenger] = useState('');
    const [probability, setProbability] = useState(0);

    const [nom, setNom] = useState('Guillaume');
    function handleChangeNom(event) {
        setNom(event.target.value)
    }

    async function getData() {
        const url = `https://api.genderize.io/?name=${nom}`;
        let rep = await fetch(url);
        if (rep.ok) {
            let data = await rep.json();
            setGenger(data.gender);
            setProbability(data.probability * 100);
        }
    }

    return (
        <div>
            <h2 className="has-text-centered title is-1 is-primary">Genderize.io</h2>
            <div className="container">
                <div className="section">
                    <div className="columns is-centered">
                        <div className="field is-horizontal" style={{paddingLeft: '20px'}}>
                            <div className="field-label is-normal">
                                <label className="label" htmlFor="nom">Nom:</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control" style={{minWidth: '200px'}}>
                                        <input className="input is-fullwidth" type="text" onChange={handleChangeNom} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="button is-primary" onClick={getData}>Submit</button>
                    </div>
                </div>
                <div className="section is-centered">
                    <div className="columns is-centered">
                        <table className="table is-bordered">
                            <thead>
                            <tr>
                                <th colSpan="2" className="has-text-centered">
                                    <label>
                                        Résultats
                                    </label>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">Genre:</th>
                                <td><label>{gender}</label></td>
                            </tr>
                            <tr>
                                <th scope="row">Probabilité:</th>
                                <td><label>{probability}%</label></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
