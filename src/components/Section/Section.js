import { Container } from './Section.styled';

export const Section = ({ title, children }) => (
    <Container>
        <h1>{title}</h1>
        <>{children}</>
    </Container>
);

