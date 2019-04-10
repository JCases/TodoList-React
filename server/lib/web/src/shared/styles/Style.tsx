import Style from 'styled-components';

export const ContentMain = Style.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #FFFFFF;
    overflow-y: auto;
    height: 60vh;
    width: 50vw;
    overflow-x: hidden;
    border-radius: 10px;

    ::-webkit-scrollbar {
        width: 2px;
        background-color: #263238;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #212121;
    }
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }
`;

export const TextInput = Style.input`
  margin-left: 2vw;

  @media (max-width: 600px) {
    width: 100px;
  }

  @media (max-width: 460px) {
    width: 60px;
  }

  @media (max-width: 400px) {
    width: 40px;
  }
`;
