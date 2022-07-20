import React from 'react';
import './../InstagramEmbed/instagram.css';
import instagram1 from '../../images/kaakwarkaphotoshoot.png'
import instagram2 from '../../images/kaakwarkaphotoshoot.png'
import instagram3 from '../../images/kaakwarkaphotoshoot.png'
import instagramlogo from '../../images/s.png'

import { Button } from '../Button';
import { ServicesH1 } from './Styledelements';
import { Container } from 'react-bootstrap';
const InstagramEmbed = () => {
    return(
        <div>
            <ServicesH1>                     
 Visitez Notre Instagram!  
 </ServicesH1>

<body>

	<section> 
		<div class="container">
			  

			<div class="carda">
				<div class="content">
					<div class="imgBx">
                    <img  src={instagram1} alt="BigCo Inc. logo"/>

                   

					</div>
					<div class="contentBx">
                    <h3>Kaak warka<span>Best seller #1</span></h3>
					</div>
				</div>
				<ul class="sci">
					<li>
					<a target="_blank" href="https://www.instagram.com/patisserieassala/"><Button> Voir le post </Button> 
 </a> 

					</li>

				</ul>
			</div>
			
			<div class="carda">
				<div class="content">
					<div class="imgBx">
                    <img  src={instagram2} alt=""/>

					</div>
					<div class="contentBx">
                    <h3>Kaak warka<span>Best seller #2</span></h3>
					</div>
				</div>
				<ul class="sci">
                <li>
				<a target="_blank" href="https://www.instagram.com/patisserieassala/"><Button> Voir le post</Button> 
 </a> 
					</li>
				</ul>
			</div>
			<div class="carda">
				<div class="content">
					<div class="imgBx">
                    <img  src={instagram3} alt="Bi"/>

					</div>
					<div class="contentBx">
						<h3>Kaak warka<span>Best seller #3</span></h3>
					</div>
				</div>
				<ul class="sci">
                <li>
				<a target="_blank" href="https://www.instagram.com/patisserieassala/"><Button> Voir le post</Button> 
 </a> 
					</li>
				</ul>
			</div>
		</div>
	</section>
    </body>
    </div>
    )
}
export default InstagramEmbed;