import * as React from "react";
import "./Table.scss";
import ApiService from "../shared/apiService";
import data from "../shared/resources";


export default class Table extends React.Component<any> {
    public static defaultProps: any = {
        resources: data.resources,
    };
    public state: any = {
        isLoading: false,
    };

    public onClickFetchResource(e, resource) {
        timer.start();
        ApiService.fetchResource(resource)
    }

    public onClickSample(e, resource) {
        this.props.viewSample(e, resource);
    }

    render() {
        const {resources} = this.props;
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Resource</th>
                    <th>Endpoint</th>
                    <th>Status</th>
                    <th>Duration</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{resources[0].name}</td>
                    <td>{resources[0].endpoint}</td>
                </tr>
                <tr>
                    <td>{resources[1].name}</td>
                    <td>{resources[1].endpoint}</td>
                </tr>
                <tr>
                    <td>{resources[2].name}</td>
                    <td>{resources[2].endpoint}</td>
                </tr>
                <tr>
                    <td>{resources[3].name}</td>
                    <td>{resources[3].endpoint}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}
