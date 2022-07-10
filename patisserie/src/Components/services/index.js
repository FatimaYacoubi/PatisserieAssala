import React from 'react'
import { ServicesContainer, ServicesCard,ServicesH1,ServicesWrapper,ServicesIcon,ServicesH2,ServicesP } from './ServicesElements';
import icon1 from '../../images/livraison.svg'
import icon2 from '../../images/money.svg'
import icon3 from '../../images/quality.svg'

const Services = () => {
    return(
<ServicesContainer id="services">
    <ServicesH1>Nos Services </ServicesH1>
    <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={icon1}/>
                <ServicesH2> Livraison </ServicesH2>
                <ServicesP> Une livraison à domicile gratuite à partir de 100dt </ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={icon2}/>
                <ServicesH2> Prix Imbattables</ServicesH2>
                <ServicesP> Reduce exprn Reduce exprn Reduce exprn Reduce exprn  </ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={icon3}/>
                <ServicesH2> Qualité Excellente </ServicesH2>
                <ServicesP>Une qualité garantie et un service client qui saisira toute réclamation </ServicesP>
        </ServicesCard>
    </ServicesWrapper>
</ServicesContainer>

    )
}
export default Services;