import styled from "styled-components";

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    
*{
    /* border: 1px solid black; */
}

#copy{
    text-align: center;
    color: rgba(0, 0, 0, 0.35);
    padding: 15px 0 0 0;
    margin: 20px 0 0 0;
}
`

export const ButtonBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* gap: 30px; */
    margin: 10px 0 0 0;

    @media (max-width: 370px) {
        flex-direction: column;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        gap: 8px;
        width: 150px;
        height: 38px;

        padding: 3px 8px;
        border-radius: 10px;
        border: 0.5px solid #BFBFBF;
        background: #FFF;
    }

    span{
        display: flex;
        align-items: center;
        height: 100%;
        text-align: center;
        line-height: 1;
    }

    img{
        width: 24px;
        height: 24px;
        object-fit: cover;
    }
`