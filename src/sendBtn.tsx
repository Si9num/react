import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable operator-linebreak */

function CreateCard(props) {
  return (
    <div className="card">
      <div>
        <p>{props.name}</p>
        <p>{props.surname}</p>
        <p>{props.sex}</p>
        <p>{props.date}</p>
        <p>{props.country}</p>
      </div>
    </div>
  );
}
const arr = [];

const sendBtn = () => {
  document.querySelector('.send').addEventListener('click', () => {
    const nameVal = (document.getElementById('name') as HTMLInputElement).value;
    const surnameVal = (document.getElementById('surname') as HTMLInputElement)
      .value;
    const dateVal = (document.getElementById('dob') as HTMLInputElement).value;
    const countryVal = (document.getElementById('country') as HTMLInputElement)
      .value;
    const isChecked = (document.getElementById('isCheck') as HTMLInputElement)
      .checked;
    let sex;
    if ((document.getElementById('sex') as HTMLInputElement).checked) {
      sex = 'male';
    } else {
      sex = 'female';
    }
    function RenderCard(): JSX.Element {
      const render = (
        <CreateCard
          name={nameVal}
          surname={surnameVal}
          sex={sex}
          date={dateVal}
          country={countryVal}
        />
      );
      if (
        nameVal !== '' &&
        surnameVal !== '' &&
        dateVal !== '' &&
        countryVal !== '' &&
        isChecked
      ) {
        arr.push(render);
      }
      console.log(arr);

      return (
        <section className="card-container" id="card-container">
          {arr}
        </section>
      );
    }

    ReactDOM.render(<RenderCard />, document.querySelector('.card-container'));
  });
};
export default sendBtn;
