import React from "react";
function Home(props) {
  // const [value, setValue] = useState("");
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`You choose ${value} language`);
  // };
  return (
    <div className="outer">
      <form onSubmit={props.handleSubmit}>
        <label>
          <input type="text" name="name" value={props.value} />
          <button type="submit">Select an option</button>
        </label>
      </form>
      <select onChange={props.handleChange}>
        <option value="javascript">javascript</option>
        <option value="java">java</option>
        <option value="ReactJs">ReactJs</option>
        <option value="NodeJs">NodeJs</option>
        <option value="MongoDB">MongoDB</option>
      </select>
    </div>
  );
}
export default Home;
