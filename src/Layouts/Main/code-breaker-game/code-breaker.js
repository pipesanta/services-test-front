import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ApiService from '../../../services/apiRest';

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        background: 'aliceblue',
        paddingLeft: "50px"
    }

}));


export default function BookComponent(props) {

    const [apiService] = useState(ApiService());
    const classes = useStyles();

    const [response, setResponse] = useState(null);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        apiService.get('/game/test')
            .then(response => {

                const { status, data } = response;
                if (status === 200) {
                    setResponse(data);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className={`${classes.mainDiv}`}>
            {JSON.stringify(response)}

            <div>
                <input id={"number-input"}></input>
            </div>

            <div>
                <button
                    id={"submit_btn"}
                    onClick={setShowResult.bind(this, true)} >
                    Enviar Numero
                </button>
            </div>

            {
                showResult && <div id="number-result" >
                    result...
                </div>
            }

        </div>
    )
}