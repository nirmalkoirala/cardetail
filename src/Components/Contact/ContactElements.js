import styled from "styled-components";

export const ContactContainer = styled.div`
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    
    @media screen and (max-width: 480px) {
    object-fit: contain;
    flex-direction: column;
    padding-bottom: 0;
    }
`

export const ContactContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Heading = styled.h1`
    margin-top: -6.5rem;    
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #000;
    /* color: ${({ lightText }) => ( lightText ? '#f7f8fa' : '#010606' )}; */

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const ContactBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;


    @media screen and (max-width: 480px) {
    object-fit: contain;
    flex-direction: column;
    padding-bottom: 0;
    }
`;