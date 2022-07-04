// https://www.npmjs.com/package/react-responsive-carousel
var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;
import background  from './background.png'

var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                <img src={background}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src={background}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src={background}/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <img src={background}/>
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        );
    }
});
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default DemoCarousel;
// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls