import { useState } from "react";
import { Container } from "react-bootstrap";

export default function DetalhesCandidato(props) {
    const [tabQuest, setTabquest] = useState([]);
    function voltar() {
        props.setDetalharCandidato(false);
    }
    function adicionaPergunta(candidato) {
        //NAO CONSEGUI PEGAR O VALOR DO INPUT

    }
    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            <h2>Nome do candidato: {props.candAtt.nome}</h2>
            <img style={{ height: '15rem' }} src={props.candAtt.avatar} alt="foto candidato" />
            <h2>E-mail: {props.candAtt.email}</h2>
            <br />
            <h2>
                Suas Propostas :
            </h2>
            <ol>
                {
                    props.candAtt.propostas.map((candidato) => {
                        return <li style={{ fontSize: '2rem' }} >{candidato}</li>
                    })
                }
            </ol>
            <br />
                <p style={{ marginLeft: '2rem' }}>Sua pergunta:</p>
                <input id="pergunta" name="pergunta" type="text" style={{ marginLeft: '2rem', width: '80vw' }} />
                <button type="submit" name="pergunta" style={{ backgroundColor: '#6e6e6e', height: '3rem', borderRadius: '1rem', margin: 'auto 2rem' }} onClick={adicionaPergunta(props.candAtt)}>
                    Adicionar pergunta
                </button>

            <button style={{ backgroundColor: '#6e6e6e', height: '3rem', borderRadius: '1rem', marginLeft:'2rem'}} onClick={() => voltar()}>
                Voltar
            </button>
        </Container>
    );
}