import styled from "styled-components"

export const GetPhoto = styled.div`
    display: flex;
    flex-direction: column;

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        width: 382.891px;
        height: 50.3px;
        flex-shrink: 0;
        background-color: #FFF6CF;
        border-radius: 15px;
        border: none;

        margin-top: 20px;
    }

    #save{
        width: 24px;
    }

    a{
        text-decoration: none;
    }
`

export const FourCutPhoto = styled.img`
    width: 384px;
`