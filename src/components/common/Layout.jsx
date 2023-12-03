import styled from 'styled-components';
import Nav from '../nav/Nav';

export const NAV_WIDTH = "5rem";

function Layout({children}) {
    return (
        <Container>
            <Nav />
            {children}
        </Container>
    );
};
const Container = styled.div`
    `;

export default Layout;