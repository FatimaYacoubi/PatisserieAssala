import React from 'react';
import './../Evenements/instagram.css';
import instagram1 from '../../Components/mariage.jpg'
import instagram2 from '../../Components/graduation.jpg'
import instagram3 from '../../Components/gettogether.jpg'
import instagramlogo from '../../images/s.png'

import { Button } from '../Button';
import { ServicesH1 } from './Styledelements';
import { Container } from 'react-bootstrap';
const Evenements = () => {
    return(
        <div>
            

<body>

	<section> 
		<div class="container">
			  

			<div class="cardaa">
				<div class="content">
					<div class="imgBx">
						<div class="h3"> hello </div>
                    <img  src={instagram1} alt="BigCo Inc. logo"/>

					
					<div class="contentBx">
					</div>
				</div> </div>

				<ul class="sci">
					<li> 
					<div class="ServicesH1"> hello </div>

					<a target="_blank" href="https://www.instagram.com/patisserieassala/"><Button> Voir le post </Button> 
 </a> 

					</li>

				</ul>
			</div>
			
			<div class="cardaa">
				<div class="content">
					<div class="imgBx">
                    <img  src={instagram2} alt=""/>

					</div>
					<div class="contentBx">
					</div>
				</div>
				<ul class="sci">
                <li>
				<a target="_blank" href="https://www.instagram.com/patisserieassala/"><Button> Voir le post</Button> 
 </a> 
					</li>
				</ul>
			</div>
			<div class="cardaa">
				<div class="content">
					<div class="imgBx">
                    <img  src={instagram3} alt="Bi"/>

					</div>
					<div class="contentBx">
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
export default Evenements;