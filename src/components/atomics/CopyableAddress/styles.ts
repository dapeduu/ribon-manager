import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  cursor: pointer;

  img {
    max-width: 17px;
    margin-right: 0.4rem;
  }

  span {
    width: 200px;
    overflow: hidden;
    text-decoration: underline;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.gray30};
  }
`;
