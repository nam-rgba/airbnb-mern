import styled from 'styled-components';

export const PrimaryButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1.2rem;
  border: none;
  cursor: pointer;
  transition: 0.1s linear;
  font-size: 1rem;
  font-weight: 500;
  width: max-content;
  height: max-content;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

export const SecondaryButton = styled.button`
  background-color: white;
  color: var(--primary-color);
  padding: 0.5rem 1.2rem;
  border: 1px solid var(--primary-color);
  cursor: pointer;
  transition: 0.1s linear;
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem;
  width: max-content;
  height: max-content;
  margin-left: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  jstify-content: space-between;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-bottom: 1px solid #d3d3d3;
  border-top: none;
  border-left: none;
  border-right: none;
  &:focus {
    border-left: 2px solid var(--primary-color);
  }
  font-size: 0.9rem;
  color: #6d6d6d;
  transition: 0.05s border ease-in-out;
`;
