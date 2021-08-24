/* eslint-disable operator-linebreak */
const toggle = (): void => {
  document.body.addEventListener('click', () => {
    if ((document.querySelector('.toggle-check') as HTMLInputElement).checked) {
      (
        document.querySelector('.status-female') as HTMLElement
      ).style.visibility = 'hidden';
      (document.querySelector('.status-male') as HTMLElement).style.visibility =
        'visible';
    } else {
      (
        document.querySelector('.status-female') as HTMLElement
      ).style.visibility = 'visible';
      (document.querySelector('.status-male') as HTMLElement).style.visibility =
        'hidden';
    }
  });
};
export default toggle;
