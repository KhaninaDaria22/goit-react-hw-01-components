import styled from '@emotion/styled';


export const StatItem = styled.li`
  min-height: 100px;
  width: 100%;
  width: calc(100% / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: #FF8A65;
  @media (min-width: 768px) {
    width: calc(100% / 5);
  }
`;

export const Label = styled.span`
  color: #fff;
`;

export const Percentage = styled.span`
  font-size: 24px;
  color: #fff;
`;