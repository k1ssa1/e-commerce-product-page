import styled from "styled-components"


const LighthouseContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: hsl(0%,0%,0%,0.75);
    height: 100vh;
    width: 100vw;
    z-index: 100;
`

const Lighthouse = ({onClose}) => {
    return ( 
        <LighthouseContainer>
            <h1>Lighthouse</h1>
            <button onClick={onClose}>Close</button>
        </LighthouseContainer>
     );
}
 
export default Lighthouse;