import { SliderControlBtnSC } from './styled/SliderControlBtnSC';
const SwiperControls = () => {
  return (
    <>
      <SliderControlBtnSC
        className='swiper-button-prev'
        id='prev-slide'
        title='Previous'
      />
      <SliderControlBtnSC
        className='swiper-button-next'
        id='next-slide'
        title='Next'
      />
    </>
  );
};

export default SwiperControls;
