import "./styles.css";
import { Checkbox } from "antd";
import { useState } from "react";

export default function App() {
  function checkHandler(e) {
    console.log(e.target.value);
    setCounts(4);
  }

  const [counts, setCounts] = useState(0);

  const data = {
    MainType1: [
      { id: 1, label: "Sub type 1", value: "sub-type-1", checked: true },
      { id: 2, label: "Sub type 2", value: "sub-type-2", checked: false }
    ],
    MainType2: [
      { id: 3, label: "Sub type 3", value: "sub-type-3", checked: false },
      { id: 4, label: "Sub type 4", value: "sub-type-4", checked: true }
    ]
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="_dropdown_type_content">
        <h4 className="_dropdown_price_title">Type of home {counts}</h4>
        <div className="_dropdown_type_content_ul_wrap">
          <ul className="_dropdown_type_content_ul">
            {Object.keys(data).map((type) => (
              <>
                <li className="_dropdown_type_content_li" key={type}>
                  <Checkbox className="_login_input_check _city_input_check_login_input_check _login_input_label">
                    <span className="_login_input_label_txt">{type}</span>
                  </Checkbox>
                </li>
                <li className="_dropdown_type_content_li">
                  <ul className="_dropdown_type_content_ul_in">
                    {data[type].map((subType) => (
                      <li
                        className="_dropdown_type_content_li_in"
                        key={subType.id}
                      >
                        <Checkbox
                          checked={subType.checked}
                          value={subType.value}
                          onChange={checkHandler}
                          className="_login_input_check _city_input_check_login_input_check _login_input_label"
                        >
                          <span className="_login_input_label_txt">
                            {subType.label}
                          </span>
                        </Checkbox>
                      </li>
                    ))}
                  </ul>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// const type = {
//     allFlat: [
//         {
//             id: 0,
//             label: 'fff',
//             value: 'flat'
//         },
//     ],
//     allHouses: [
//         {
//             id: 0,
//             label: 'fff',
//             value: 'flat'
//         },
//     ],
// }

// const a1 = Object.keys((type));
// a1.map((name,id)=>{
//     console.log(name);
//     type[name].map((name2,id)=>{
//         name2
//     })
// })