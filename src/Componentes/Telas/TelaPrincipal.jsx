import { Container } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import {listaCandidatos} from "../../dados/candidatos";
export default function TelaPrincipal(props) {
    const [detalharCandidato, setDetalharCandidato]=useState(false)
    const [candAtt, setCandAtt] = useState({});
    return (
        <Pagina>
            {
                detalharCandidato ? (
                    <DetalhesCandidato setDetalharCandidato={setDetalharCandidato}
                                       detalharCandidato={detalharCandidato}
                                       candAtt={candAtt} />
                ) : (
                    <GridCandidatos candAtt={candAtt}
                                    setCandAtt={setCandAtt}
                                    detalharCandidato={detalharCandidato}
                                    setDetalharCandidato={setDetalharCandidato}
                                    listaCandidatos={listaCandidatos} />
                )
            }
        </Pagina>
    );
}