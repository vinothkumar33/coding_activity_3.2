import "./styles.css";

export default function App() {
  const handler = () => {
    const name = document.getElementById("name").value;
    const size = document.getElementById("size").value;
    const quantity = document.getElementById("quantity").value;
    const Pepproni = document.getElementById("pepproni").checked;
    const Glutenfree = document.getElementById("glutenfree").checked;
    const instruction = document.getElementById("message").value;
    const outputstr = `<h2>Order for ${quantity} ${size} pizza(s) that are 
    ${Pepproni ? ` have pepproni` : ` not pepproni`} and
    ${Glutenfree ? `have gluten-free` : `not gluten-free`}  for ${name}</h2>
                <h1>Instructions: ${instruction}</h1>`;
    document.getElementById("root").innerHTML = outputstr;
  };

  return (
    <form>
      <h1>Wellcome to Pizza Hut</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8VDTrnpjUPbfYkTkU8oswyKANmPRE7WA4w&usqp=CAU" />
      <div>
        <label>
          Enter the name:
          <input type="text" id="name" />
        </label>
      </div>
      <div>
        <label>
          Size:
          <select id="size">
            <option>Large</option>
            <option>Medium</option>
            <option>Small</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Pepproni
          <input type="checkbox" id="pepproni" />
        </label>
      </div>
      <div>
        <label>
          Gluten Free
          <input type="checkbox" id="glutenfree" />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <input type="number" id="quantity" />
        </label>
      </div>
      <div>
        <p>Addtitional Instructions</p>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="message"
        ></textarea>
      </div>
      <div>
        <button onClick={handler}>submit</button>
      </div>
    </form>
  );
}
