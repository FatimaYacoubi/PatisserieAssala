import React from 'react';
import './../BestSellers/ServicesElements.css';
import Kaakwarka from '../../images/Kaakwarka.png'
import { Button } from '../Button';
import { ServicesH1 } from './Styledelements';
const BestSellers = () => {
    return(
        <div>
            <ServicesH1> Best Sellers </ServicesH1>

<body>

	<section>
		<div class="container">
			<div class="card">
				<div class="content">
					<div class="imgBx">
                    <img  src={Kaakwarka} alt="BigCo Inc. logo"/>

                   

					</div>
					<div class="contentBx">
                    <h3>Kaak warka<span>Best seller #1</span></h3>
					</div>
				</div>
				<ul class="sci">
					<li>
                    <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"><Button> Commander</Button> </a> 

					</li>

				</ul>
			</div>
			<div class="card">
				<div class="content">
					<div class="imgBx">
                    <img  src={Kaakwarka} alt="BigCo Inc. logo"/>

                   

					</div>
					<div class="contentBx">
                    <h3>Kaak warka<span>Best seller #1</span></h3>
					</div>
				</div>
				<ul class="sci">
					<li>
                    <a href=""><Button> Commander</Button> </a> 

					</li>

				</ul>
			</div>
			<div class="card">
				<div class="content">
					<div class="imgBx">
                    <img  src={Kaakwarka} alt=""/>

					</div>
					<div class="contentBx">
                    <h3>Kaak warka<span>Best seller #2</span></h3>
					</div>
				</div>
				<ul class="sci">
                <li>
                    <a href=""><Button> Commander</Button> </a> 

					</li>
				</ul>
			</div>
			<div class="card">
				<div class="content">
					<div class="imgBx">
                    <img  src={Kaakwarka} alt="Bi"/>

					</div>
					<div class="contentBx">
						<h3>Kaak warka<span>Best seller #3</span></h3>
					</div>
				</div>
				<ul class="sci">
                <li>
                    <a href=""><Button> Commander</Button> </a> 

					</li>
				</ul>
			</div>
		</div>
	</section>
    </body>
    </div>
    )
}
export default BestSellers;