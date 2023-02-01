import React from "react";
import Icon1 from '../../images/imagen1.svg'
import Icon2 from '../../images/imagen3.png'
import Icon3 from '../../images/car.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";



const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1> Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} >
            <ServicesH2> Reduce the spent money in fees</ServicesH2>
            <ServicesP>
                We want to help you reduce the time you waste transfering and
                the money you lose because of that. 
            </ServicesP>
            </ServicesIcon>
          </ServicesCard>
          <ServicesCard>
          <ServicesIcon src={Icon2} >              <ServicesH2>Virtual Customer Service</ServicesH2>
              <ServicesP>
                There's no need for you to go to a place to solve problems with
                your online card/account, you can just contact us via Whatssap
            
              </ServicesP>
            </ServicesIcon>
          </ServicesCard>
          <ServicesCard>
          <ServicesIcon src={Icon3} >              <ServicesH2>Amazing Discounts</ServicesH2>
              <ServicesP>
                You can receive discounts by shopping in certain retail and
                stores!
              </ServicesP>
            </ServicesIcon>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
