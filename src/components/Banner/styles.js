import styled from 'styled-components';
import BannerImage from '../../assets/images/banner.jpg';

export const StyledBanner = styled.section`
  width: 100%;
  height: 70vh;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.205), rgba(128, 0, 128, 0.281)),
    url(${BannerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
