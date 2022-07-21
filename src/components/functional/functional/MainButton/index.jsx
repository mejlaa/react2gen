import style from './mainButton.module.css';

const MainButton = props => {
  const { text = 'Click me', color = 'dark', radius, size } = props;

  const getColor = () => {
    switch (color) {
      case 'dark':
        return style.main;
      case 'red':
        return style.red;
      case 'yellow':
        return style.yellow;
      case 'white':
        return style.white;
      default:
        return style.main;
    }
  };

  const getRadius = () => {
    switch (radius) {
      case 'xs':
        return style.radiusXS;
      case 'sm':
        return style.radiusSM;
      case 'mg':
        return style.radiusMD;
      case 'lg':
        return style.radiusLG;
      case 'xl':
        return style.radiusXL;
      default:
        return style.radiusNULL;
    }
  };

  const getSize = () => {
    switch (size) {
      case 'xxs':
        return style.sizeXS;
      case 's':
        return style.sizeSM;
      case 'm':
        return style.sizeMD;
      case 'l':
        return style.sizeLG;
      case 'xxl':
        return style.sizeXL;
      default:
        return style.normal;
    }
  };

  return (
    <button className={`${getColor()} ${getRadius()} ${getSize()}`}>
      {text}
    </button>
  );
};

export default MainButton;
