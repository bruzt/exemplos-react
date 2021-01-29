import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .inputs-container {
        width: 100%;
        max-width: 400px;
        height: 500px;

        & > * + * {
            margin-top: 20px;
        }
    }

    .input-group {
        display: flex;
        flex-direction: column;
    }
`;
