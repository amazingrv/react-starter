import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const HeaderComp = props => {
  const Header = styled.div`
    color: white;
    background-color: #002060;
  `;

  const { children } = props;
  return (
    <div>
      {/* generic styled header */}
      <Header>{children}</Header>
    </div>
  );
};

HeaderComp.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderComp;
