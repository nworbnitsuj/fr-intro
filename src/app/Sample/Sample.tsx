import * as React from "react";

const Sample: React.StatelessComponent<any> = () => {

    let sampleHtml;

    switch (resource.name) {
        case "Activities":
            sampleHtml = (<div>
                Activity Sample.
            </div>)
            break;
        case "Groups":
            sampleHtml = (<div>
                Group Sample.
            </div>)
            break;
        case "Fitness Providers":
            sampleHtml = (<div>
                Fitness Provider Sample.
            </div>)
            break;
        case "Challenges":
            sampleHtml = (<div>
                Challenge Sample.
            </div>)
            break;
        default:
            sampleHtml = "Uh oh."
    }

    return (
        <div className="container">
            <br/>
            <div className="row">
                <button className="btn btn-secondary">
                    <i className="fas fa-arrow-left"></i>
                </button>
            </div>
            <br/>
            <div className="row">
                <div className="container">
                    {sampleHtml}
                </div>
            </div>
        </div>
    );
}


export default Sample;