import Table from "react-bootstrap/Table";
import Buttons from "./Buttons";
import '../../src/index.css'

function StripedColumnsExample() {
  return (
    <Table    bordered hover striped  className="border-success custom-table ">
      <thead >
        <tr  className="text-center ">
          <th >ID</th>
          <th>Agent</th>
          <th>Status</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center ">
          <td>25</td>
          <td className="text-color">John Employee</td>
          <td>Active</td>
          <td>2024-12-24 09.00</td>
          <td className="text-start margin">
            <Buttons size='sm'  desc="Del" variant="danger" />
          </td>

        </tr>
        
        <tr className="text-center">
          <td>16</td>
                    <td className="text-color">John Employee</td>

          <td>Active</td>
          <td>2024-12-24 10.00</td>
          <td></td>
        </tr>
        <tr className="text-center">
          <td>14</td>
                   <td className="text-color">Jane Agent</td>

          <td>Active</td>
          <td>2024-12-24 10.00</td>
          <td></td>
        </tr>
        <tr className="text-center">
          <td>8</td>
                   <td className="text-color">John Employee</td>

          <td>Active</td>
          <td>2024-12-24 10.00</td>
          <td></td>
        </tr>
        <tr className="text-center">
          <td>7</td>
                  <td className="text-color">John Employee</td>

          <td>Active</td>
          <td>2024-12-24 10.00</td>
          <td></td>
        </tr>
        <tr className="text-center">
          <td>4</td>
                   <td className="text-color"> Jane Agent</td>

          <td>Active</td>
          <td>2024-12-24 10.00</td>
          <td></td>
        </tr>
        <tr className="text-center">
          <td>3</td>
                    <td className="text-color">Jane Agent</td>

          <td>Active</td>
          <td>2024-12-24 10.00</td>
          <td></td>
        </tr>
        <tr className="text-center">
          <td>2</td>
                    <td className="text-color">John Employee</td>

          <td>Active</td>
          <td>2024-12-24 10.00</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StripedColumnsExample;
