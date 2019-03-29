import Style from 'styled-components';

export const Button = Style.button`
    background: #0D47A1;
    border-radius: 3px;
    border: 1px solid #263238;
    color: white;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
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
