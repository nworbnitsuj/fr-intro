import * as React from "react";

const TableRow: React.StatelessComponent<any> = () => (
    <tr>
        <td>{resource.name}</td>
        <td>{resource.endpoint}</td>
        <td>{!!isLoading ? <i className="fas fa-spinner spin"></i> : resource.status || '-'}</td>
        <td></td>
        <td className="action-buttons">
            <div className="btn-group">
                <button onClick={onClickFetchResource}
                        className="btn btn-success">GET
                </button>
                <button onClick={onClickSample()}
                        className="btn btn-info">Sample
                </button>
            </div>
        </td>
    </tr>
);


export default TableRow;