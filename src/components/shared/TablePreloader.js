import styled from "styled-components";

const SectionPreloader = () => {
    return (
        <Loader>
            <section></section>
        </Loader>
    )
}

const TablePreloader = (count) => {
    return (
        <>
            <tr>
                {[...Array(count)].map((e,i) => <td key={i}><SectionPreloader/></td>)}
            </tr>
            <tr>
                {[...Array(count)].map((e,i) => <td key={i}><SectionPreloader/></td>)}
            </tr>
            <tr>
                {[...Array(count)].map((e,i) => <td key={i}><SectionPreloader/></td>)}
            </tr>
            <tr>
                {[...Array(count)].map((e,i) => <td key={i}><SectionPreloader/></td>)}
            </tr>
        </>
    )
}

const Loader = styled.div`
    section {
        padding: 10px;
        width: 60vw;
        margin-top: 10px;
        margin-bottom: 10px;
        animation: pulse 0.75s linear alternate infinite;
    }

    @keyframes pulse {
        0% {
            background-color: #fff;
        }
        100% {
            background-color: #cccccc;
        }
    }
`

export default TablePreloader;
