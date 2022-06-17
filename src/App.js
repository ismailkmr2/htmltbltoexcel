import logo from "./logo.svg";
import ReactToExcel from "react-html-table-to-excel";
import "./App.css";

function App() {
  const submit = () => {
    console.log("Hi");
  };
  return (
    <div className="App">
      <table border="1" id="tbl-to-exl">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
        </tr>
        <tr>
          <td>Hillary</td>
          <td>Xyakedo</td>
          <td>tables@mail.com</td>
        </tr>
        <tr>
          <td>Lary</td>
          <td>Mak</td>
          <td>developer@mail.com</td>
        </tr>
        <tr>
          <td>Hillary</td>
          <td>Xyakedo</td>
          <td>tables@mail.com</td>
        </tr>
        <tr>
          <td>Lary</td>
          <td>Mak</td>
          <td>developer@mail.com</td>
        </tr>
      </table>

<ReactToExcel
table="tbl-to-exl"
filename="excelfile"
sheet="sheet 1"
buttonText="EXPORT"></ReactToExcel>
    </div>
  );
}

export default App;
