import HeaderPhone from '../HeaderPhone/HeaderPhone';
import Header from './Header';
import useIsMobile from '../../../hooks/useIsMobile';
import { memo } from 'react';

const ConditionalHeaderComponent = () => {
  const isMobile = useIsMobile();
  return isMobile ? <HeaderPhone /> : <Header />;
};

const ConditionalHeader = memo(ConditionalHeaderComponent);
export default ConditionalHeader;
