export function render(){
    this.sliderElement = document.getElementById(this.el);
    this.sliderElement.className = 'slider';
    this.sliderContainer = document.createElement('div');
    this.sliderContainer.className = 'slider__slider-container';
    this.sliderElement.appendChild(this.sliderContainer);
}