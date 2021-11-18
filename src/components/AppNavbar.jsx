import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAuth } from '../hooks/index.js';

const AuthSection = () => {
  const auth = useAuth();
  const { t } = useTranslation();

  return auth.loggedIn ? (
    <Button variant="primary" onClick={auth.logOut}>
      {t('buttons.logOut')}
    </Button>
  ) : null;
};

const AppNavbar = () => (
  <Navbar className="shadow-sm" bg="white" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">
        Hexlet Chat
      </Navbar.Brand>
      <AuthSection />
    </Container>
  </Navbar>
);

export default AppNavbar;
